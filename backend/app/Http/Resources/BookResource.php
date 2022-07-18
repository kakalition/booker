<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
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
      'isbn' => $this->isbn,
      'title' => $this->title,
      'author_name' => null,
      'publisher_name' => null,
      'total_available_copies' => $this->total_available_copies,
      'total_copies_owned' => $this->total_copies_owned,
      'published_at' => $this->published_at,
    ];
  }
}
