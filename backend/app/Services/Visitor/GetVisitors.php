<?php

namespace App\Services\Visitor;

use App\Models\Visitor;

class GetVisitors
{
  public static function handle()
  {
    $visitors = Visitor::all();

    return $visitors;
  }
}
