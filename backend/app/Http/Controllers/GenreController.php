<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGenreRequest;
use App\Http\Requests\UpdateGenreRequest;
use App\Models\Genre;
use App\Services\Genre\GetGenres;
use Exception;
use Illuminate\Http\Request;

class GenreController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(GetGenres $getGenres)
  {
    try {
      $genres = $getGenres->handle();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($genres, 200);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\StoreGenreRequest  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Genre  $genre
   * @return \Illuminate\Http\Response
   */
  public function show(Genre $genre)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Genre  $genre
   * @return \Illuminate\Http\Response
   */
  public function edit(Genre $genre)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\UpdateGenreRequest  $request
   * @param  \App\Models\Genre  $genre
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Genre $genre)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Genre  $genre
   * @return \Illuminate\Http\Response
   */
  public function destroy(Genre $genre)
  {
    //
  }
}
