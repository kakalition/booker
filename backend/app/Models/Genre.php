<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Genre extends Model
{
  use HasFactory;

  protected $fillable = [
    'name'
  ];

  public static function queryDb(string $query, string $orderBy, int $count)
  {
    return Author::query()
      ->where('name', 'ILIKE', "$query%")
      ->orderBy('name', $orderBy)
      ->limit($count)
      ->get();
  }


  public function books(): HasMany
  {
    return $this->hasMany(Book::class, 'genre_id');
  }

  public function totalAuthor()
  {
    return Genre::query()
      ->join('books', 'genres.id', 'books.genre_id')
      ->distinct('author_id')
      ->count();
  }

  public function totalPublisher()
  {
    return Genre::query()
      ->join('books', 'genres.id', 'books.genre_id')
      ->distinct('publisher_id')
      ->count();
  }

  public function totalTitle()
  {
    return Genre::query()
      ->join('books', 'genres.id', 'books.genre_id')
      ->distinct('title')
      ->count();
  }

  public function totalCopiesAvailable()
  {
    return $this
      ->books
      ->sum('total_available_copies');
  }

  public function totalCopiesOwned()
  {
    return $this
      ->books
      ->sum('total_copies_owned');
  }
}
