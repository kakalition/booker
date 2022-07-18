<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\Book;
use App\Models\Borrower;
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


  public function fetchAll()
  {
    $borrowers = Borrower::all();

    return $borrowers;
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
      $borrower->end_date = $data['end_date'] ?? $borrower->end_date;
      $borrower->status = $data['status'] ?? $borrower->status;

      if ($data['status'] == 1) {
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
