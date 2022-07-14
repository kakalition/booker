<?php

namespace App\Services;

use App\Models\Genre;

class GenreService
{
  public function fetchAll()
  {
    $genres = Genre::all();

    return $genres;
  }

  public function store(array $data)
  {
    $genre = Genre::create($data);

    return $genre;
  }

  public function update(Genre $genre, array $data)
  {
    $genre->name = $data['name'] ?? $genre->name;
    $genre->save();

    return $genre;
  }

  public function delete(Genre $genre)
  {
    $genre->delete();
  }
}
