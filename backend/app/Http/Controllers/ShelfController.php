<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreShelfRequest;
use App\Http\Requests\UpdateShelfRequest;
use App\Models\Shelf;
use App\Services\ShelfService;
use Exception;

class ShelfController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(ShelfService $service)
  {
    try {
      $shelf = $service->fetchAll();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($shelf, 200);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\StoreShelfRequest  $request
   * @return \Illuminate\Http\Response
   */
  public function store(StoreShelfRequest $request, ShelfService $service)
  {
    $validatedData = $request->validated();

    try {
      $shelf = $service->store($validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($shelf, 201);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Shelf  $shelf
   * @return \Illuminate\Http\Response
   */
  public function show(Shelf $shelf, ShelfService $service)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\UpdateShelfRequest  $request
   * @param  \App\Models\Shelf  $shelf
   * @return \Illuminate\Http\Response
   */
  public function update(UpdateShelfRequest $request, Shelf $shelf, ShelfService $service)
  {
    $validatedData = $request->validated();

    try {
      $shelf = $service->update($shelf, $validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($shelf, 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Shelf  $shelf
   * @return \Illuminate\Http\Response
   */
  public function destroy(Shelf $shelf, ShelfService $service)
  {
    try {
      $service->delete($shelf);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
