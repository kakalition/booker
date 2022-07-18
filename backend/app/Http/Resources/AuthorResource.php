<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AuthorResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    return [
      'id' => $this->id,
      'name' => $this->name,
      'birth_date' => $this->birth_date,
      'total_title_owned' => $this->totalTitleOwned(),
      'total_copies_owned' => $this->totalCopiesOwned(),
      'total_copies_borrowed' => $this->totalCopiesBorrowed(),
    ];
  }
}
