<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use App\Services\Genre\CreateGenre;
use App\Services\Genre\GetGenres;
use App\Services\Genre\UpdateGenre;
use App\Services\GenreService;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

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

  public function store(Request $request, CreateGenre $createGenre)
  {
    try {
      $genre = $createGenre->handle([
        'name' => $request->input('name'),
      ]);
    } catch (UnprocessableEntityHttpException $exception) {
      return response($exception->getMessage(), 422);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($genre, 201);
  }

  public function show(Genre $genre)
  {
    //
  }

  public function update(Request $request, Genre $genre, UpdateGenre $updateGenre)
  {
    try {
      $genre = $updateGenre->handle($genre, [
        'name' => $request->input('name'),
      ]);
    } catch (UnprocessableEntityHttpException $exception) {
      return response($exception->getMessage(), 422);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($genre, 200);
  }

  public function destroy(Genre $genre)
  {
    $genre->delete();

    return response('', 204);
  }
}
