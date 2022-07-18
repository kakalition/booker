<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\CheckIn;
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

  public function fetchAll()
  {
    $authors = CheckIn::all();

    return $authors;
  }

  public function store(int $userId, array $data): CheckIn
  {
    return DB::transaction(function () use ($userId, $data) {
      $checkIn = $this->_store($data);
      ActivityLog::createAuthor($userId, $checkIn->name);
      return $checkIn;
    });
  }

  public function update(int $userId, CheckIn $checkIn, array $data): CheckIn
  {
    return DB::transaction(function () use ($userId, $checkIn, $data) {
      $checkIn = $this->_update($checkIn, $data);
      ActivityLog::updateAuthor($userId, $checkIn->name);
      return $checkIn;
    });
  }

  public function delete(int $userId, CheckIn $checkIn)
  {
    DB::transaction(function () use ($userId, $checkIn) {
      $checkIn->delete();
      ActivityLog::deleteAuthor($userId, $checkIn->name);
    });
  }
}
