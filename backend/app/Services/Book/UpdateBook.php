<?php

namespace App\Services\Book;

use App\Models\Book;
use App\Services\BaseServiceValidation;

class UpdateBook extends BaseServiceValidation
{
  protected function validationRules(array $data): array
  {
    return [
      'title' => 'nullable|string|unique:books,title',
      'isbn' => 'nullable|string|unique:books,isbn',
      'genre_id' => 'nullable|integer',
      'total_copies_owned' => 'nullable|integer',
      'published_at' => 'nullable|date',
    ];
  }

  public function handle(Book $book, array $data)
  {
    $validatedData = $this->getValidatedData($data);

    $book->title = $validatedData['title'] ?? $book->title;
    $book->isbn = $validatedData['isbn'] ?? $book->isbn;
    $book->genre_id = $validatedData['genre_id'] ?? $book->genre_id;
    $book->total_copies_owned = $validatedData['total_copies_owned'] ?? $book->total_copies_owned;
    $book->published_at = $validatedData['published_at'] ?? $book->published_at;
    $book->save();

    return $book;
  }
}
