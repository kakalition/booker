<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGenreRequest;
use App\Http\Requests\UpdateGenreRequest;
use App\Models\Genre;
use App\Services\GenreService;
use Exception;

class GenreController extends Controller
{
  public function index(GenreService $service)
  {
    try {
      $genres = $service->fetchAll();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($genres->toJson(), 200);
  }

  public function store(StoreGenreRequest $request, GenreService $service)
  {
    $validatedData = $request->validated();

    try {
      $genre = $service->store($validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($genre, 201);
  }

  public function show(Genre $genre)
  {
    //
  }

  public function update(UpdateGenreRequest $request, Genre $genre, GenreService $service)
  {
    $validatedData = $request->validated();

    try {
      $genre = $service->update($genre, $validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($genre, 200);
  }

  public function destroy(Genre $genre, GenreService $service)
  {
    try {
      $genre = $service->delete($genre);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
