<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Services\BookService;
use Exception;
use Illuminate\Http\Request;

class BookController extends Controller
{
  public function index(Request $request, BookService $service)
  {
    try {
      $books = $service->queryDb(
        $request->query('query'),
        $request->query('orderBy'),
        $request->query('count'),
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response(BookResource::collection($books), 200);
  }

  public function store(StoreBookRequest $request, BookService $service)
  {
    $validatedData = $request->validated();

    try {
      $books = $service->store(
        auth()->user()->id,
        $validatedData
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($books->toJson(), 201);
  }

  public function show(Book $book)
  {
    return response($book, 200);
  }

  public function update(UpdateBookRequest $request, Book $book, BookService $service)
  {
    $validatedData = $request->validated();

    try {
      $books = $service->update(
        auth()->user()->id,
        $book,
        $validatedData
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($books->toJson(), 200);
  }

  public function destroy(Book $book, BookService $service)
  {
    try {
      $service->delete(
        auth()->user()->id,
        $book
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
