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

  public static function queryDb(string $name, ?int $code, int $count)
  {
    return ActivityLog::query()
      ->join('users', 'activity_logs.user_id', 'users.id')
      ->where('name', 'ILIKE', "$name%")
      ->when($code, function ($query, $code) {
        $query->where('code', $code);
      })
      ->latest('activity_logs.created_at')
      ->limit($count)
      ->get();
  }

  private static function baseCreate(string $entity, int $userId, string $authorName, string $messagePart = 'added new')
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 0,
      'message' => "$username $messagePart $entity: $authorName."
    ]);
  }

  private static function baseUpdate(string $entity, int $userId, string $authorName, string $messagePart = 'updated new')
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 1,
      'message' => "$username $messagePart $entity: $authorName."
    ]);
  }

  private static function baseDelete(string $entity, int $userId, string $authorName, string $messagePart = 'deleted')
  {
    $username = User::find($userId)->name;

    ActivityLog::create([
      'user_id' => $userId,
      'code' => 2,
      'message' => "$username $messagePart $entity: $authorName."
    ]);
  }

  public static function createAuthor(int $userId, string $authorName)
  {
    self::baseCreate('author', $userId, $authorName);
  }

  public static function updateAuthor(int $userId, string $authorName)
  {
    self::baseUpdate('author', $userId, $authorName);
  }

  public static function deleteAuthor(int $userId, string $authorName)
  {
    self::baseDelete('author', $userId, $authorName);
  }

  public static function createPublisher(int $userId, string $name)
  {
    self::baseCreate('publisher', $userId, $name);
  }

  public static function updatePublisher(int $userId, string $name)
  {
    self::baseUpdate('publisher', $userId, $name);
  }

  public static function deletePublisher(int $userId, string $name)
  {
    self::baseDelete('publisher', $userId, $name);
  }

  public static function createGenre(int $userId, string $name)
  {
    self::baseCreate('genre', $userId, $name);
  }

  public static function updateGenre(int $userId, string $name)
  {
    self::baseUpdate('genre', $userId, $name);
  }

  public static function deleteGenre(int $userId, string $name)
  {
    self::baseDelete('genre', $userId, $name);
  }

  public static function createVisitor(int $userId, string $name)
  {
    self::baseCreate('visitor', $userId, $name);
  }

  public static function updateVisitor(int $userId, string $name)
  {
    self::baseUpdate('visitor', $userId, $name);
  }

  public static function deleteVisitor(int $userId, string $name)
  {
    self::baseDelete('visitor', $userId, $name);
  }

  public static function createBook(int $userId, string $title)
  {
    self::baseCreate('book', $userId, $title);
  }

  public static function updateBook(int $userId, string $title)
  {
    self::baseUpdate('book', $userId, $title);
  }

  public static function deleteBook(int $userId, string $title)
  {
    self::baseDelete('book', $userId, $title);
  }

  public static function createBorrower(int $userId, string $name)
  {
    self::baseCreate('borrower', $userId, $name, 'approved');
  }

  public static function updateBorrower(int $userId, string $name)
  {
    self::baseUpdate('borrower', $userId, $name);
  }

  public static function deleteBorrower(int $userId, string $name)
  {
    self::baseDelete('borrower', $userId, $name);
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
}
