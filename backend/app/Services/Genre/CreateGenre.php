<?php

namespace App\Services\Genre;

use App\Models\Genre;
use App\Models\User;
use App\Services\BaseService;
use App\Services\BaseServiceValidation;
use Illuminate\Database\Eloquent\Model;

class CreateGenre extends BaseServiceValidation
{
  protected function validationRules(array $data): array
  {
    return [
      'name' => 'required|string|unique:genres,name'
    ];
  }

  public function handle(User $user, array $data)
  {
    $validatedData = $this->getValidatedData($data);

    $genre = Genre::create([
      'name' => $validatedData['name']
    ]);

    return $genre;
  }
}
