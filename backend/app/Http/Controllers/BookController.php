<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Services\Book\CreateBook;
use App\Services\Book\UpdateBook;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

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

  public function store(Request $request, CreateBook $createBook)
  {
    try {
      $books = $createBook->handle([
        'title' => $request->input('title'),
        'isbn' => $request->input('isbn'),
        'author_id' => $request->input('author_id'),
        'genre_id' => $request->input('genre_id'),
        'total_copies_owned' => $request->input('total_copies_owned'),
        'published_at' => $request->input('published_at')
      ]);
    } catch (UnprocessableEntityHttpException $exception) {
      return response($exception->getMessage(), 422);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($books->toJson(), 201);
  }

  public function show(Book $book)
  {
    //
  }

  public function update(Request $request, Book $book, UpdateBook $updateBook)
  {
    try {
      $books = $updateBook->handle($book, [
        'title' => $request->input('title'),
        'isbn' => $request->input('isbn'),
        'author_id' => $request->input('author_id'),
        'genre_id' => $request->input('genre_id'),
        'total_copies_owned' => $request->input('total_copies_owned'),
        'published_at' => $request->input('published_at')
      ]);
    } catch (UnprocessableEntityHttpException $exception) {
      return response($exception->getMessage(), 422);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($books->toJson(), 200);
  }

  public function destroy(Book $book)
  {
    $book->delete();

    return response('', 204);
  }
}
