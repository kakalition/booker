<?php

namespace App\Services\Book;

use App\Models\Book;
use App\Services\BaseServiceValidation;

class CreateBook extends BaseServiceValidation
{
  protected function validationRules(array $data): array
  {
    return [
      'title' => 'required|string|unique:books,title',
      'isbn' => 'required|string|unique:books,isbn',
      'author_id' => 'required|integer',
      'genre_id' => 'required|integer',
      'total_copies_owned' => 'required|integer',
      'published_at' => 'required|date',
    ];
  }

  public function handle(array $data)
  {
    $validatedData = $this->getValidatedData($data);

    $book = Book::create([
      'title' => $validatedData['title'],
      'isbn' => $validatedData['isbn'],
      'genre_id' => $validatedData['author_id'],
      'genre_id' => $validatedData['genre_id'],
      'total_copies_owned' => $validatedData['total_copies_owned'],
      'published_at' => $validatedData['published_at']
    ]);

    return $book;
  }
}
