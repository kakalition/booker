<?php

namespace Tests\Helpers;

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;
use function Pest\Laravel\putJson;

class Borrower extends TestHelper
{
  static function get()
  {
    $response = getJson('/api/borrowers');

    return $response;
  }

  static function store(array $data)
  {
    $response = postJson('/api/borrowers', [
      'visitor_id' => $data['visitor_id'],
      'book_id' => $data['book_id'],
      'end_date' => $data['end_date'],
    ]);

    return $response;
  }

  static function update(string $id, array $data)
  {
    $response = putJson("/api/borrowers/$id", [
      'visitor_id' => $data['visitor_id'] ?? null,
      'book_id' => $data['book_id'] ?? null,
      'end_date' => $data['end_date'] ?? null,
    ]);

    return $response;
  }

  static function delete(string $id)
  {
    $response = deleteJson("/api/borrowers/$id");

    return $response;
  }
}
