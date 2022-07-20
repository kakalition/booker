<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVisitorRequest;
use App\Http\Requests\UpdateVisitorRequest;
use App\Http\Resources\VisitorResource;
use App\Models\Visitor;
use App\Services\VisitorService;
use Exception;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
  public function index(Request $request, VisitorService $service)
  {
    try {
      $visitors = $service->queryDb(
        $request->query('query'),
        $request->query('orderBy'),
        $request->query('count'),
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response(VisitorResource::collection($visitors), 200);
  }

  public function store(StoreVisitorRequest $request, VisitorService $service)
  {
    $validatedData = $request->validated();

    try {
      $visitor = $service->store(
        auth()->user()->id,
        $validatedData
      );
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
      $visitor = $service->update(
        auth()->user()->id,
        $visitor,
        $validatedData
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($visitor, 200);
  }

  public function destroy(Visitor $visitor, VisitorService $service)
  {
    try {
      $service->delete(
        auth()->user()->id,
        $visitor
      );
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response('', 204);
  }
}
