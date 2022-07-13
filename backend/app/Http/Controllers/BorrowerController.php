<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBorrowerRequest;
use App\Http\Requests\UpdateBorrowerRequest;
use App\Models\Borrower;
use App\Services\BorrowerService;
use Exception;

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

  public function store(StoreBorrowerRequest $request, BorrowerService $service)
  {
    $validatedData = $request->validated();

    try {
      $borrower = $service->store($validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($borrower, 201);
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
