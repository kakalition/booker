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
}
