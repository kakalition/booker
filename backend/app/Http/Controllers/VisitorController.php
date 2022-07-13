<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVisitorRequest;
use App\Http\Requests\UpdateVisitorRequest;
use App\Models\Visitor;
use App\Services\VisitorService;
use Exception;

class VisitorController extends Controller
{
  public function index(VisitorService $service)
  {
    try {
      $visitors = $service->fetchAll();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($visitors->toJson(), 200);
  }

  public function store(StoreVisitorRequest $request, VisitorService $service)
  {
    $validatedData = $request->validated();

    try {
      $visitor = $service->store($validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($visitor, 201);
  }

  public function show(Visitor $visitor)
  {
    //
  }

  public function update(UpdateVisitorRequest $request, Visitor $visitor, VisitorService $service)
  {
    $validatedData = $request->validated();

    try {
      $visitor = $service->update($visitor, $validatedData);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($visitor, 200);
  }

  public function destroy(Visitor $visitor, VisitorService $service)
  {
    try {
      $service->delete($visitor);
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
