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
  }

  public function update(Borrower $borrower, array $data)
  {
  }

  public function delete(array $data)
  {
  }
}
