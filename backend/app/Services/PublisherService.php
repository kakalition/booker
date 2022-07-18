<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\Publisher;
use Illuminate\Support\Facades\DB;

class PublisherService
{
  public function fetchAll()
  {
    $publishers = Publisher::all();

    return $publishers;
  }

  public function store(int $userId, array $data)
  {
    return DB::transaction(function () use ($userId, $data) {
      $publisher = Publisher::create($data);
      ActivityLog::createPublisher($userId, $publisher->name);
      return $publisher;
    });
  }

  public function update(int $userId, Publisher $publisher, array $data)
  {
    return DB::transaction(function () use ($userId, $publisher, $data) {
      $publisher->name = $data['name'] ?? $publisher->name;
      $publisher->save();
      ActivityLog::updatePublisher($userId, $publisher->name);
      return $publisher;
    });
  }

  public function delete(int $userId, Publisher $publisher)
  {
    DB::transaction(function () use ($userId, $publisher) {
      $publisher->delete();
      ActivityLog::deletePublisher($userId, $publisher->name);
    });
  }
}
