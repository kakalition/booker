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
    $user = User::find($userId);
    if (!$user) {
      throw new Exception('User not found');
    }

    $username = $user->name;
    ActivityLog::create([
      'user_id' => $userId,
      'code' => 0,
      'message' => "$username added new author $authorName."
    ]);
  }
}
