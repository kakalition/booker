<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Borrower extends Model
{
  use HasFactory;

  protected $fillable = [
    'visitor_id',
    'book_id',
    'end_date',
  ];

  public function visitor() {
    return $this->belongsTo(Visitor::class, 'visitor_id');
  }

  public function book() {
    return $this->belongsTo(Book::class, 'book_id');
  }
}
