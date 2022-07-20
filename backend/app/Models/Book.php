<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
  use HasFactory;

  protected $fillable = [
    'title',
    'isbn',
    'author_id',
    'publisher_id',
    'genre_id',
    'total_available_copies',
    'total_copies_owned',
    'published_at'
  ];

  public static function queryDb(string $query, string $orderBy, int $count)
  {
    return Book::query()
      ->where('title', 'ILIKE', "$query%")
      ->orderBy('title', $orderBy)
      ->limit($count)
      ->get();
  }

  public function author()
  {
    return $this->belongsTo(Author::class, 'author_id');
  }

  public function publisher()
  {
    return $this->belongsTo(Publisher::class, 'publisher_id');
  }

  public function genre()
  {
    return $this->belongsTo(Genre::class, 'genre_id');
  }

  public function authorName()
  {
    return $this->author->first()->name;
  }

  public function publisherName()
  {
    return $this->publisher->first()->name;
  }
}
