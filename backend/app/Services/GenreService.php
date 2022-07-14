<?php

namespace App\Services;

use App\Models\Genre;

class GenreService
{
  public function fetchAll()
  {
    $borrowers = Genre::all();

    return $borrowers;
  }

  public function store(array $data)
  {
    $publisher = Genre::create($data);

    return $publisher;
  }

  public function update(Genre $publisher, array $data)
  {
    $publisher->name = $data['name'] ?? $publisher->name;
    $publisher->save();

    return $publisher;
  }

  public function delete(Genre $publisher)
  {
    $publisher->delete();
  }
}
