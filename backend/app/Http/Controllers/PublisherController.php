<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePublisherRequest;
use App\Http\Requests\UpdatePublisherRequest;
use App\Models\Publisher;
use App\Services\PublisherService;
use Exception;

class PublisherController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(PublisherService $service)
  {
    try {
      $publishers = $service->fetchAll();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($publishers, 200);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\StorePublisherRequest  $request
   * @return \Illuminate\Http\Response
   */
  public function store(StorePublisherRequest $request, PublisherService $service)
  {
    $validatedData = $request->validated();

    try {
      $publisher = $service->store($validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($publisher, 201);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Publisher  $publisher
   * @return \Illuminate\Http\Response
   */
  public function show(Publisher $publisher, PublisherService $service)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\UpdatePublisherRequest  $request
   * @param  \App\Models\Publisher  $publisher
   * @return \Illuminate\Http\Response
   */
  public function update(UpdatePublisherRequest $request, Publisher $publisher, PublisherService $service)
  {
    $validatedData = $request->validated();

    try {
      $publisher = $service->update($publisher, $validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($publisher, 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Publisher  $publisher
   * @return \Illuminate\Http\Response
   */
  public function destroy(Publisher $publisher, PublisherService $service)
  {
    try {
      $service->delete($publisher);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
