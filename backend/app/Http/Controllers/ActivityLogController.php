<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActivityLogResource;
use App\Models\ActivityLog;
use Illuminate\Http\Request;

class ActivityLogController extends Controller
{
  public function index(Request $request)
  {
    $activityLogs = ActivityLog::queryDb(
      $request->query('name') ?? '',
      $request->query('code'),
      $request->query('count') ?? 10,
    );

    return response(ActivityLogResource::collection($activityLogs), 200);
  }

  public function store()
  {
  }
}
