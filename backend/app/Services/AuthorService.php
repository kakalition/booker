<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\Author;
use Illuminate\Support\Facades\DB;

class AuthorService
{
  private function _store(array $data): Author
  {
    $author = Author::create([
      'name' => $data['name'],
      'birth_date' => $data['birth_date'],
    ]);

    return $author;
  }

  private function _update(Author $author, array $data): Author
  {
    $author->name = $data['name'] ?? $author->name;
    $author->birth_date = $data['birth_date'] ?? $author->birth_date;
    $author->save();

    return $author;
  }

  public function fetchAll()
  {
    $authors = Author::all();

    return $authors;
  }

  public function store(int $userId, array $data): Author
  {
    return DB::transaction(function () use ($userId, $data) {
      $author = $this->_store($data);
      ActivityLog::createAuthor($userId, $author->name);
      return $author;
    });
  }

  public function update(int $userId, Author $author, array $data): Author
  {
    return DB::transaction(function () use ($userId, $author, $data) {
      $author = $this->_update($author, $data);
      ActivityLog::updateAuthor($userId, $author->name);
      return $author;
    });
  }

  public function delete(int $userId, Author $author)
  {
    DB::transaction(function () use ($userId, $author) {
      $author->delete();
      ActivityLog::deleteAuthor($userId, $author->name);
    });
  }
}
