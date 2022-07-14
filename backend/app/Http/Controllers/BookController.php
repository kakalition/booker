<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;
use App\Services\Book\CreateBook;
use App\Services\Book\UpdateBook;
use App\Services\BookService;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class BookController extends Controller
{
  public function index(BookService $service)
  {
    try {
      $books = $service->fetchAll();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($books->toJson(), 200);
  }

  public function store(StoreBookRequest $request, BookService $service)
  {
    $validatedData = $request->validated();

    try {
      $books = $service->store($validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($books->toJson(), 201);
  }

  public function show(Book $book)
  {
    //
  }

  public function update(UpdateBookRequest $request, Book $book, BookService $service)
  {
    $validatedData = $request->validated();

    try {
      $books = $service->update($book, $validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($books->toJson(), 200);
  }

  public function destroy(Book $book, BookService $service)
  {
    try {
      $service->delete($book);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
