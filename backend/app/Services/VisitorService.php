<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\Visitor;
use Illuminate\Support\Facades\DB;

class VisitorService
{
  public function queryDb(?string $query, ?string $orderBy, ?int $count)
  {
    $query = $query ?? '';
    $orderBy = $orderBy ?? 'desc';
    $count = $count ?? 10;

    $visitors = Visitor::queryDb($query, $orderBy, $count);

    return $visitors;
  }


  public function store(int $userId, array $data)
  {
    return DB::transaction(function () use ($userId, $data) {
      $visitor = Visitor::create($data);

      ActivityLog::createVisitor($userId, $visitor->name);

      return $visitor;
    });
  }

  public function update(int $userId, Visitor $visitor, array $data)
  {
    return DB::transaction(function () use ($userId, $visitor, $data) {
      $visitor->email = $data['email'];
      $visitor->save();

      ActivityLog::updateVisitor($userId, $visitor->name);

      return $visitor;
    });
  }

  public function delete(int $userId, Visitor $visitor)
  {
    return DB::transaction(function () use ($userId, $visitor) {
      $visitor->delete();

      ActivityLog::updateVisitor($userId, $visitor->name);
    });
  }
}
