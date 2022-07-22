<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BorrowerResource extends JsonResource
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
      'visitor_id' => $this->visitor_id,
      'visitor' => $this->visitorName(),
      'book_id' => $this->book_id,
      'book' => $this->bookTitle(),
      'total_borrowed' => $this->total_borrowed,
      'end_date' => $this->end_date,
      'status' => $this->status,
      'is_overdue' => $this->isOverdue(),
    ];
  }
}
