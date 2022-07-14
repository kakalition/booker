<?php

namespace App\Services;

use App\Models\Publisher;

class PublisherService
{
  public function fetchAll()
  {
    $publishers = Publisher::all();

    return $publishers;
  }

  public function store(array $data)
  {
    $publisher = Publisher::create($data);

    return $publisher;
  }

  public function update(Publisher $publisher, array $data)
  {
    $publisher->name = $data['name'] ?? $publisher->name;
    $publisher->save();

    return $publisher;
  }

  public function delete(Publisher $publisher)
  {
    $publisher->delete();
  }
}
