<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\Book;
use App\Models\Borrower;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class BorrowerService
{
  private function checksTotalAvailableCopies(Book $book, int $totalBorrowed)
  {
    if ($totalBorrowed > $book->total_available_copies) {
      throw new UnprocessableEntityHttpException('Total borrow exceeding available copies');
    }
  }

  private function incrementAvailableCopies(int $bookId, int $totalBorrowed)
  {
    $book = Book::find($bookId);
    $book->increment('total_available_copies', $totalBorrowed);
  }

  private function decrementAvailableCopies(int $bookId, int $totalBorrowed)
  {
    $book = Book::find($bookId);
    $this->checksTotalAvailableCopies($book, $totalBorrowed);
    $book->decrement('total_available_copies', $totalBorrowed);
  }

  public function queryDb(?string $query, ?string $orderBy, ?string $orderDirection)
  {
    $query = $query ?? '';
    $orderBy = $orderBy ?? 'name';
    $orderDirection = $orderDirection ?? 'desc';

    $borrowers = Borrower::query()
      ->join('visitors', 'borrowers.visitor_id', 'visitors.id')
      ->join('books', 'borrowers.book_id', 'books.id')
      ->where('visitors.name', 'ILIKE', "$query%")
      ->orderBy($orderBy, $orderDirection)
      ->select([
        'borrowers.*',
        'books.id as book_id', 'visitors.id as visitor_id',
        'books.title as books', 'visitors.name as visitor'
      ])
      ->get();

    $te = $borrowers->map(function ($item, $key) {
      $item['is_overdue'] = $item['end_date'] < Carbon::now();
      return $item;
    });

    return $te;
  }

  public function store(int $userId, array $data)
  {
    return DB::transaction(function () use ($userId, $data) {
      $data['status'] = 0;

      $this->decrementAvailableCopies($data['book_id'], $data['total_borrowed']);

      $borrower = Borrower::create($data);

      ActivityLog::createBorrower($userId, $borrower->visitor->name);

      return $borrower;
    });
  }

  public function update(Borrower $borrower, array $data)
  {
    return DB::transaction(function () use ($borrower, $data) {
      $borrower->update($data);
      /*       $borrower->end_date = $data['end_date'] ?? $borrower->end_date;
      $borrower->status = $data['status'] ?? $borrower->status; */

      if ($data['status'] ?? 0 == 1) {
        $this->incrementAvailableCopies($borrower->book_id, $borrower->total_borrowed);
      }

      $borrower->save();
      return $borrower;
    });
  }

  public function delete(Borrower $borrower)
  {
    $borrower->delete();
  }
}
