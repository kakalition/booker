<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVisitorRequest;
use App\Models\Visitor;
use App\Services\Visitor\GetVisitors;
use Exception;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
  public function index(GetVisitors $getVisitors)
  {
    try {
      $visitors = $getVisitors->handle();
    } catch (Exception $exception) {
      return response($exception->getMessage(), 500);
    }

    return response($visitors->toJson(), 200);
  }

  public function store(StoreVisitorRequest $request)
  {
    //
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
