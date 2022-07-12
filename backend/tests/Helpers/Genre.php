<?php

namespace Tests\Helpers;

use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;

class Genre
{
  static function get()
  {
    $response = getJson('/api/genres');
    return $response;
  }

  static function store(string $name) {
    $response = postJson('/api/genres', ['name' => $name]);
    return $response;
  }
}
