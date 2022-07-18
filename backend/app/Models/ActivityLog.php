<?php

namespace App\Models;

use Exception;
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

  public static function createAuthor(int $userId, string $authorName)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 0,
      'message' => "$username added new author $authorName."
    ]);
  }

  public static function updateAuthor(int $userId, string $authorName)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 1,
      'message' => "$username updated new author $authorName."
    ]);
  }

  public static function deleteAuthor(int $userId, string $authorName)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 2,
      'message' => "$username deleted new author $authorName."
    ]);
  }
}
