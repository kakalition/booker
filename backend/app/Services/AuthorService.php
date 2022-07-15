<?php

namespace App\Services;

use App\Models\Author;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class AuthorService
{
  public function fetchAll(
    ?string $queryStr,
    int $page,
    int $showsPerPage,
    string $sortBy,
    string $sortOrder,
  ) {
    $offset = ($page * $showsPerPage) - $showsPerPage;
    $authors = Author::when($queryStr, fn ($query, $queryStr) => $query->where('name', 'ILIKE', "%$queryStr%"))
      ->orderBy($sortBy, $sortOrder)
      ->offset($offset)
      ->limit($showsPerPage)
      ->get();

    return $authors;
  }

  public function store(array $data): Author
  {
    $author = Author::create([
      'name' => $data['name'],
      'birth_date' => $data['birth_date'],
    ]);

    return $author;
  }

  public function update(Author $author, array $data): Author
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
