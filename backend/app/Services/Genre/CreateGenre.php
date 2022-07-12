<?php

namespace App\Services\Genre;

use App\Models\Genre;
use App\Models\User;
use App\Services\BaseService;
use Illuminate\Database\Eloquent\Model;

class CreateGenre extends BaseService
{
  protected function validationRules(array $data): array
  {
    return [
      'name' => 'required|string|unique:genres,name'
    ];
  }

  protected function authorizationRules(User $user, ?Model $model): bool
  {
    return true;
  }

  public function handle(User $user, array $data)
  {
    $this->authorize($user);

    $validatedData = $this->getValidatedData($data);

    $genre = Genre::create([
      'name' => $validatedData['name']
    ]);

    return $genre;
  }
}
