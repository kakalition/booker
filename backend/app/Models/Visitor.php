<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'birth_date',
    'gender',
    'email',
  ];

  public function borrowers()
  {
    return $this->hasMany(Borrower::class, 'visitor_id');
  }

  public function overdueBorrows()
  {
    return Visitor::query()
      ->join('borrowers', 'visitors.id', 'borrowers.visitor_id')
      ->where('status', '0')
      ->where('end_date', '<', Carbon::now())
      ->get();
  }
}
