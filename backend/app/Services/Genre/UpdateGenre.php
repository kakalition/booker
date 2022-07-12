<?php

namespace App\Services\Genre;

use App\Models\Genre;
use App\Services\BaseServiceValidation;

class UpdateGenre extends BaseServiceValidation
{
  protected function validationRules(array $data): array
  {
    return [
      'name' => 'required|string|unique:genres,name'
    ];
  }

  public function handle(Genre $genre, array $data)
  {
    $validatedData = $this->getValidatedData($data);

    $genre->name = $validatedData['name'];
    $genre->save();

    return $genre;
  }
}
