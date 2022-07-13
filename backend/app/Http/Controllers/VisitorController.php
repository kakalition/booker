<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVisitorRequest;
use App\Models\Visitor;
use App\Services\Visitor\GetVisitors;
use App\Services\Visitor\StoreVisitor;
use App\Services\VisitorService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
    Log::info($validatedData);

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

  public function update(Request $request, Visitor $visitor)
  {
    //
  }

  public function destroy(Visitor $visitor)
  {
    //
  }
}
