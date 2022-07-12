<?php

namespace Tests\Helpers;

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\patchJson;
use function Pest\Laravel\postJson;

class Genre
{
  static function get()
  {
    $response = getJson('/api/genres');
    return $response;
  }

  static function store(string $name)
  {
    $response = postJson('/api/genres', ['name' => $name]);
    return $response;
  }

  static function update(int $id, string $name)
  {
    $response = patchJson("/api/genres/$id", [
      'name' => $name
    ]);
    return $response;
  }

  static function delete(int $id)
  {
    $response = deleteJson("/api/genres/$id");
    return $response;
  }
}
