<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'code', // 0: Create | 1: Update | 2: Delete
    'message'
  ];
}
