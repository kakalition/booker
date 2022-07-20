<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GenreResource extends JsonResource
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
      'total_author' => $this->totalAuthor(),
      'total_publisher' => $this->totalPublisher(),
      'total_title' => $this->totalTitle(),
      'total_copies_available' => $this->totalCopiesAvailable(),
      'total_copies_owned' => $this->totalCopiesOwned(),
    ];
  }
}
