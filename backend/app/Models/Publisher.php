<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Publisher extends Model
{
  use HasFactory;

  protected $fillable = [
    'name'
  ];

  public function books(): HasMany
  {
    return $this->hasMany(Book::class, 'publisher_id');
  }

  public function borrowers(): HasManyThrough
  {
    return $this->hasManyThrough(Borrower::class, Book::class);
  }

  public static function queryDb(string $query, string $orderBy, int $count)
  {
    return Publisher::query()
      ->where('name', 'ILIKE', "$query%")
      ->orderBy('name', $orderBy)
      ->limit($count)
      ->get();
  }

  public function totalAuthor()
  {
    return Publisher::query()
      ->join('books', 'publishers.id', 'books.publisher_id')
      ->distinct('author_id')
      ->count();
  }

  public function totalGenre()
  {
    return Publisher::query()
      ->join('books', 'publishers.id', 'books.publisher_id')
      ->distinct('genre_id')
      ->count();
  }

  public function totalTitleOwned()
  {
    return Publisher::query()
      ->join('books', 'publishers.id', 'books.publisher_id')
      ->count();
  }

  public function totalCopiesOwned()
  {
    return Publisher::query()
      ->join('books', 'publishers.id', 'books.publisher_id')
      ->sum('total_copies_owned');
  }

  public function totalCopiesBorrowed()
  {
    return $this->borrowers->sum('total_borrowed');
  }
}
