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
    'genre_id',
    'total_copies_owned',
    'published_at'
  ];
}
