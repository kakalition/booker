<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use Illuminate\Http\Request;

class ActivityLogController extends Controller
{
  public function index()
  {
    return response(ActivityLog::all(), 200);
  }

  public function store()
  {
  }
}
