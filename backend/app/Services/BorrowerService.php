<?php

namespace App\Services;

use App\Models\Borrower;

class BorrowerService
{
  public function fetchAll()
  {
    $borrowers = Borrower::all();

    return $borrowers;
  }

  public function store(array $data)
  {
    $borrower = Borrower::create($data);

    return $borrower;
  }

  public function update(Borrower $borrower, array $data)
  {
    $borrower->visitor_id = $data['visitor_id'] ?? $borrower->visitor_id;
    $borrower->book_id = $data['book_id'] ?? $borrower->book_id;
    $borrower->end_date = $data['end_date'] ?? $borrower->end_date;
    $borrower->save();

    return $borrower;
  }

  public function delete(Borrower $borrower)
  {
    $borrower->delete();
  }
}
