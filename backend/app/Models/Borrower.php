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
}
