<?php

namespace App\Services;

use App\Models\ActivityLog;
use App\Models\Genre;
use Illuminate\Support\Facades\DB;

class GenreService
{
  public function queryDb(?string $query, ?string $orderBy, ?int $count)
  {
    $query = $query ?? '';
    $orderBy = $orderBy ?? 'desc';
    $count = $count ?? 10;

    $genres = Genre::queryDb($query, $orderBy, $count);

    return $genres;
  }

  public function store(int $userId, array $data)
  {
    return DB::transaction(function () use ($userId, $data) {
      $genre = Genre::create($data);
      ActivityLog::createGenre($userId, $genre->name);
      return $genre;
    });
  }

  public function update(int $userId, Genre $genre, array $data)
  {
    return DB::transaction(function () use ($userId, $genre, $data) {
      $genre->name = $data['name'] ?? $genre->name;
      $genre->save();

      ActivityLog::updateGenre($userId, $genre->name);

      return $genre;
    });
  }

  public function delete(int $userId, Genre $genre)
  {
    return DB::transaction(function () use ($userId, $genre) {
      $genre->delete();

      ActivityLog::deleteGenre($userId, $genre->name);

      return $genre;
    });
  }
}
