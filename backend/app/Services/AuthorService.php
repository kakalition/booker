<?php

namespace App\Services;

use App\Models\Author;

class AuthorService
{
  public function fetchAll()
  {
    $authors = Author::all();

    return $authors;
  }

  public function store(array $data)
  {
    $author = Author::create([
      'name' => $data['name'],
      'birth_date' => $data['birth_date'],
    ]);

    return $author;
  }

  public function update(Author $author, array $data)
  {
    $author->name = $data['name'] ?? $author->name;
    $author->birth_date = $data['birth_date'] ?? $author->birth_date;
    $author->save();

    return $author;
  }

  public function delete(Author $author)
  {
    $author->delete();
  }
}
