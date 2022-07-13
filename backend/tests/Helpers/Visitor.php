<?php

namespace Tests\Helpers;

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\patchJson;
use function Pest\Laravel\postJson;

class Visitor
{
  static function get()
  {
    $response = getJson('/api/visitors');
    return $response;
  }

  static function store(array $data)
  {
    $response = postJson('/api/visitors', [
      'name' => $data['name'],
      'age' => $data['age'],
      'gender' => $data['gender'],
      'email' => $data['email'],
    ]);

    return $response;
  }

  static function update(int $id, array $data)
  {
    $response = patchJson("/api/books/$id", [
      'title' => $data['title'] ?? null,
      'isbn' => $data['isbn'] ?? null,
      'genre_id' => $data['genre_id'] ?? null,
      'total_copies_owned' => $data['total_copies_owned'] ?? null,
      'published_at' => $data['published_at'] ?? null,
    ]);

    return $response;
  }

  static function delete(int $id)
  {
    $response = deleteJson("/api/books/$id");
    return $response;
  }
}
