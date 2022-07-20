<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCheckInRequest;
use App\Http\Requests\UpdateCheckInRequest;
use App\Models\CheckIn;
use App\Services\CheckInService;
use Exception;
use Illuminate\Http\Request;

class CheckInController extends Controller
{
  public function index(Request $request, CheckInService $service)
  {
    try {
      $authors = $service->queryDb(
        $request->query('query'),
        $request->query('orderBy'),
        $request->query('count'),
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($authors, 200);
  }

  public function store(StoreCheckInRequest $request, CheckInService $service)
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

  public function show(CheckIn $checkIn)
  {
    return response($checkIn, 200);
  }

  public function update(UpdateCheckInRequest $request, CheckIn $checkIn, CheckInService $service)
  {
    $validatedData = $request->validated();

    try {
      $authors = $service->update(
        auth()->user()->id,
        $checkIn,
        $validatedData
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($authors, 200);
  }

  public function destroy(CheckIn $checkIn, CheckInService $service)
  {
    try {
      $authors = $service->delete(
        auth()->user()->id,
        $checkIn
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
