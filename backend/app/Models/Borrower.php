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
    'total_borrowed',
    'end_date',
    'status',
  ];

  public function visitor()
  {
    return $this->belongsTo(Visitor::class, 'visitor_id');
  }

  public function book()
  {
    return $this->belongsTo(Book::class, 'book_id');
  }
}
