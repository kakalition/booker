<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PublisherResource extends JsonResource
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
      'total_genre' => $this->totalGenre(),
      'total_title_owned' => $this->totalTitleOwned(),
      'total_copies_owned' => $this->totalCopiesOwned(),
      'total_copies_borrowed' => $this->totalCopiesBorrowed(),
    ];
  }
}
