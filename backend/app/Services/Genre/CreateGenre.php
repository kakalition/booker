<?php

namespace App\Services\Genre;

use App\Models\Genre;
use App\Services\BaseServiceValidation;

class CreateGenre extends BaseServiceValidation
{
  protected function validationRules(array $data): array
  {
    return [
      'name' => 'required|string|unique:genres,name'
    ];
  }

  public function handle(array $data)
  {
    $validatedData = $this->getValidatedData($data);

    $genre = Genre::create([
      'name' => $validatedData['name']
    ]);

    return $genre;
  }
}
