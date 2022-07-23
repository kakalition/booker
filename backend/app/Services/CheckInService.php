<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\CheckIn;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class CheckInService
{
  private function _store(array $data): CheckIn
  {
    $checkIn = CheckIn::create([
      'visitor_id' => $data['visitor_id'],
      'status' => 0,
    ]);

    return $checkIn;
  }

  private function _update(CheckIn $checkIn, array $data): CheckIn
  {
    $checkIn->status = $data['status'];
    $checkIn->save();

    return $checkIn;
  }

  public function queryDb(?string $query, ?string $date, ?string $orderBy, ?string $orderDirection)
  {
    $query = $query ?? '';

    $orderBy = $orderBy ?? 'created_at';
    if ($orderBy === 'checked_in_at') {
      $orderBy = 'check_ins.created_at';
    }

    if ($orderBy === 'status') {
      $orderBy = 'check_ins.checked_out_at';
    }

    $date = $date ?? Carbon::now();
    $orderDirection = $orderDirection ?? 'desc';

    return CheckIn::query()
      ->join('visitors', 'check_ins.visitor_id', 'visitors.id')
      ->where('visitors.name', 'ILIKE', "$query%")
      ->whereDate('check_ins.created_at', $date)
      ->orderBy($orderBy, $orderDirection)
      ->select([
        'check_ins.*',
        'visitors.name as visitor'
      ])
      ->get();
  }

  public function store(int $userId, array $data): CheckIn
  {
    return DB::transaction(function () use ($userId, $data) {
      $checkIn = $this->_store($data);
      ActivityLog::checkIn($userId, $checkIn->visitor->name);
      return $checkIn;
    });
  }

  public function update(int $userId, CheckIn $checkIn, array $data): CheckIn
  {
    return DB::transaction(function () use ($userId, $checkIn, $data) {
      $checkIn = $this->_update($checkIn, $data);
      ActivityLog::checkOut($userId, $checkIn->name);
      return $checkIn;
    });
  }

  public function delete(int $userId, CheckIn $checkIn)
  {
    DB::transaction(function () use ($userId, $checkIn) {
      $checkIn->delete();
      ActivityLog::deleteCheckIn($userId, $checkIn->name);
    });
  }
}
