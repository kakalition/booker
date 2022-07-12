<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Exception;
use Illuminate\Http\Request;

class BookController extends Controller
{
  public function index()
  {
    try {
      $books = Book::all();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($books->toJson(), 200);
  }

  public function store(Request $request)
  {
    //
  }

  public function show(Book $book)
  {
    //
  }

  public function update(Request $request, Book $book)
  {
    //
  }

  public function destroy(Book $book)
  {
    //
  }
}
