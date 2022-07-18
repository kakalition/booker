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

  public function fetchAll()
  {
    $borrowers = Borrower::all();

    return $borrowers;
  }

  public function store(int $userId, array $data)
  {
    return DB::transaction(function () use ($userId, $data) {
      $data['status'] = 0;

      $book = Book::find($data['book_id']);
      $this->checksTotalAvailableCopies($book, $data['total_borrowed']);

      $borrower = Borrower::create($data);
      $book->decrement('total_available_copies', $data['total_borrowed']);

      ActivityLog::createBorrower($userId, $borrower->name);

      return $borrower;
    });
  }

  public function update(Borrower $borrower, array $data)
  {
    $borrower->end_date = $data['end_date'] ?? $borrower->end_date;
    $borrower->save();

    return $borrower;
  }

  public function delete(Borrower $borrower)
  {
    $borrower->delete();
  }
}
