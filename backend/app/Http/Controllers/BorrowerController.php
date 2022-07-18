<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBorrowerRequest;
use App\Http\Requests\UpdateBorrowerRequest;
use App\Http\Resources\BorrowerResource;
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

    return response(BorrowerResource::collection($borrowers), 200);
  }

  public function store(StoreBorrowerRequest $request, BorrowerService $service)
  {
    $validatedData = $request->validated();

    try {
      $borrower = $service->store(
        auth()->user()->id,
        $validatedData
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($borrower, 201);
  }

  public function show(Borrower $borrower)
  {
    return response($borrower, 200);
  }

  public function update(UpdateBorrowerRequest $request, Borrower $borrower, BorrowerService $service)
  {
    $validatedData = $request->validated();

    try {
      $borrower = $service->update($borrower, $validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($borrower, 200);
  }

  public function destroy(Borrower $borrower, BorrowerService $service)
  {
    try {
      $borrower = $service->delete($borrower);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
