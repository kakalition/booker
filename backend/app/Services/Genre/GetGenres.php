<?php

namespace App\Services\Genre;

use App\Models\Genre;
use App\Services\BaseServiceAuthorization;

class GetGenres
{
  public function handle()
  {
    $genres = Genre::all(['name', 'created_at']);

    return $genres;
  }
}