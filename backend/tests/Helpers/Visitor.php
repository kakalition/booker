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
      'birth_date' => $data['birth_date'],
      'gender' => $data['gender'],
      'email' => $data['email'],
    ]);

    return $response;
  }

  static function update(int $id, array $data)
  {
    $response = patchJson("/api/visitors/$id", [
      'email' => $data['email'],
    ]);

    return $response;
  }

  static function delete(int $id)
  {
    $response = deleteJson("/api/visitors/$id");
    return $response;
  }
}
