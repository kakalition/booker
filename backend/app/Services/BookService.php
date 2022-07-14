<?php

namespace App\Services;

use App\Models\Book;

class BookService
{
  public function fetchAll()
  {
    $books = Book::all();

    return $books;
  }

  public function store(array $data)
  {
    $book = Book::create($data);

    return $book;
  }

  public function update(Book $book, array $data)
  {
    $book->title = $data['title'] ?? $book->title;
    $book->isbn = $data['isbn'] ?? $book->isbn;
    $book->author_id = $data['author_id'] ?? $book->author_id;
    $book->publisher_id = $data['publisher_id'] ?? $book->publisher_id;
    $book->genre_id = $data['genre_id'] ?? $book->genre_id;
    $book->total_copies_owned = $data['total_copies_owned'] ?? $book->total_copies_owned;
    $book->published_at = $data['published_at'] ?? $book->published_at;
    $book->save();

    return $book;
  }

  public function delete(Book $book)
  {
    $book->delete();
  }
}
