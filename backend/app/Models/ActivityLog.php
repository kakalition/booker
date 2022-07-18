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
      'message' => "$username added new author: $authorName."
    ]);
  }

  public static function updateAuthor(int $userId, string $authorName)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 1,
      'message' => "$username updated new author: $authorName."
    ]);
  }

  public static function deleteAuthor(int $userId, string $authorName)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 2,
      'message' => "$username deleted new author: $authorName."
    ]);
  }

  public static function checkIn(int $userId, string $name)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 0,
      'message' => "$username checked in: $name."
    ]);
  }

  public static function checkOut(int $userId, string $name)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 1,
      'message' => "$username checked out: $name."
    ]);
  }

  public static function deleteCheckIn(int $userId, string $name)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 2,
      'message' => "$username delete check in data: $name."
    ]);
  }

  public static function createPublisher(int $userId, string $name)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 0,
      'message' => "$username added publisher: $name."
    ]);
  }

  public static function updatePublisher(int $userId, string $name)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 1,
      'message' => "$username updated publisher: $name."
    ]);
  }

  public static function deletePublisher(int $userId, string $name)
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 2,
      'message' => "$username deleted publisher: $name."
    ]);
  }
}
