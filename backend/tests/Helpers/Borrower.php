<?php

namespace Tests\Helpers;

use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;

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

  static function update(int $id, array $data)
  {
  }

  static function delete(int $id)
  {
  }
}
