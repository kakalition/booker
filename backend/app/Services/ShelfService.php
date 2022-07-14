<?php

namespace App\Services;

use App\Models\Shelf;

class ShelfService
{
  public function fetchAll()
  {
    $borrowers = Shelf::all();

    return $borrowers;
  }

  public function store(array $data)
  {
    $shelf = Shelf::create($data);

    return $shelf;
  }

  public function update(Shelf $shelf, array $data)
  {
    $shelf->floor_id = $data['floor_id'] ?? $shelf->floor_id;
    $shelf->code = $data['code'] ?? $shelf->code;
    $shelf->save();

    return $shelf;
  }

  public function delete(Shelf $shelf)
  {
    $shelf->delete();
  }
}
