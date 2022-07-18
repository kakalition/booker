<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\UpdateAuthorRequest;
use App\Models\Author;
use App\Services\AuthorService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthorController extends Controller
{
  public function index(Request $request, AuthorService $service)
  {
    try {
      $authors = $service->fetchAll();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($authors, 200);
  }

  public function store(StoreAuthorRequest $request, AuthorService $service)
  {
    $validatedData = $request->validated();

    try {
      $authors = $service->store(
        auth()->user()->id,
        $validatedData
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($authors, 201);
  }

  public function show(Author $author)
  {
    return response($author, 200);
  }

  public function update(UpdateAuthorRequest $request, Author $author, AuthorService $service)
  {
    $validatedData = $request->validated();

    try {
      $authors = $service->update(
        auth()->user()->id,
        $author,
        $validatedData
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($authors, 200);
  }

  public function destroy(Author $author, AuthorService $service)
  {
    try {
      $authors = $service->delete(
        auth()->user()->id,
        $author
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
