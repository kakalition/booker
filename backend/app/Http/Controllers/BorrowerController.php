<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBorrowerRequest;
use App\Http\Requests\UpdateBorrowerRequest;
use App\Models\Borrower;
use App\Services\BorrowerService;
use Exception;
use Illuminate\Http\Request;

class BorrowerController extends Controller
{
  public function index(BorrowerService $service)
  {
    try {
      $borrowers = $service->fetchAll();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($borrowers, 200);
  }

  public function store(StoreBorrowerRequest $request)
  {
    //
  }

  public function show(Borrower $borrower)
  {
    //
  }

  public function update(UpdateBorrowerRequest $request, Borrower $borrower)
  {
    //
  }

  public function destroy(Borrower $borrower)
  {
    //
  }
}
