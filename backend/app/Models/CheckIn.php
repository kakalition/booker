<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckIn extends Model
{
  use HasFactory;

  protected $fillable = [
    'visitor_id',
    'checked_out_at'
  ];

  public static function queryDb(string $query, string $orderBy, int $count)
  {
    return CheckIn::query()
      ->join('visitors', 'check_ins.visitor_id', 'visitors.id')
      ->where('name', 'ILIKE', "$query%")
      ->orderBy('name', $orderBy)
      ->limit($count)
      ->get();
  }
}
