<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBorrowerRequest;
use App\Http\Requests\UpdateBorrowerRequest;
use App\Http\Resources\BorrowerResource;
use App\Models\Book;
use App\Models\Borrower;
use App\Models\Visitor;
use App\Services\BorrowerService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BorrowerController extends Controller
{
  public function index(Request $request, BorrowerService $service)
  {
    Log::info($request->query());
    try {
      $borrowers = $service->queryDb(
        $request->query('query'),
        $request->query('order-by'),
        $request->query('order-direction'),
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    Log::info($borrowers);

    $data = [];
    $data['data'] = $borrowers;
    $data['book_data'] = Book::data();
    $data['visitor_data'] = Visitor::data();

    return response($data, 200);
  }

  public function store(StoreBorrowerRequest $request, BorrowerService $service)
  {
    $validatedData = $request->validated();
    Log::info($validatedData);

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
    return response(new BorrowerResource($borrower), 200);
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
