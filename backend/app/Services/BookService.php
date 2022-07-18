<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\Book;
use Illuminate\Support\Facades\DB;

class BookService
{
  public function fetchAll()
  {
    $books = Book::all();

    return $books;
  }

  public function store(int $userId, array $data)
  {
    return DB::transaction(function () use ($userId, $data) {
      $data['total_available_copies'] = $data['total_copies_owned'];
      $book = Book::create($data);

      ActivityLog::createBook($userId, $book->title);

      return $book;
    });
  }

  public function update(int $userId, Book $book, array $data)
  {
    return DB::transaction(function () use ($userId, $book, $data) {
      $book->title = $data['title'] ?? $book->title;
      $book->isbn = $data['isbn'] ?? $book->isbn;
      $book->author_id = $data['author_id'] ?? $book->author_id;
      $book->publisher_id = $data['publisher_id'] ?? $book->publisher_id;
      $book->genre_id = $data['genre_id'] ?? $book->genre_id;
      $book->total_available_copies = $data['total_available_copies'] ?? $book->total_available_copies;
      $book->total_copies_owned = $data['total_copies_owned'] ?? $book->total_copies_owned;
      $book->published_at = $data['published_at'] ?? $book->published_at;
      $book->save();

      ActivityLog::updateBook($userId, $book->title);

      return $book;
    });
  }

  public function delete(int $userId, Book $book)
  {
    DB::transaction(function () use ($userId, $book) {
      $book->delete();

      ActivityLog::deleteBook($userId, $book->title);

      return $book;
    });
  }
}
