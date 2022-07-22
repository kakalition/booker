<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

  public static function queryDb(string $query, string $orderBy, int $count)
  {
    return Borrower::query()
      ->join('visitors', 'borrowers.visitor_id', 'visitors.id')
      ->where('name', 'ILIKE', "$query%")
      ->orderBy('name', $orderBy)
      ->limit($count)
      ->get();
  }

  public function visitor(): BelongsTo
  {
    return $this->belongsTo(Visitor::class, 'visitor_id');
  }

  public function book(): BelongsTo
  {
    return $this->belongsTo(Book::class, 'book_id');
  }

  public function bookTitle()
  {
    return $this->book->title;
  }

  public function visitorName()
  {
    return $this->visitor->name;
  }

  public function isOverdue()
  {
    return $this->end_date < Carbon::now();
  }
}
