<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Author extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'birth_date'
  ];

  public function books(): HasMany
  {
    return $this->hasMany(Book::class, 'author_id');
  }

  public function totalTitleOwned()
  {
    return $this->books->count();
  }

  public function totalCopiesOwned()
  {
    return $this->books->sum('total_copies_owned');
  }

  public function totalCopiesBorrowed()
  {
    return Borrower::where('book_id', $this->id)
      ->sum('total_borrowed');
  }
}
