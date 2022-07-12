<?php

namespace Tests\Helpers;

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\patchJson;
use function Pest\Laravel\postJson;

class Book
{
  static function get()
  {
    $response = getJson('/api/books');
    return $response;
  }

  static function store(array $data)
  {
    $response = postJson('/api/books', [
      'title' => $data['title'],
      'isbn' => $data['isbn'],
      'genre_id' => $data['genre_id'],
      'total_copies_owned' => $data['total_copies_owned'],
      'published_at' => $data['published_at'],
    ]);

    return $response;
  }

  static function update(int $id, string $name)
  {
    $response = patchJson("/api/books/$id", [
      'name' => $name
    ]);
    return $response;
  }

  static function delete(int $id)
  {
    $response = deleteJson("/api/books/$id");
    return $response;
  }
}
