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
      'visitor' => $this->visitorName(),
      'book' => $this->book()->first(),
      'end_date' => $this->end_date,
      'status' => $this->status == 0 ? 'Borrowed' : 'Returned',
      'is_overdue' => $this->isOverdue(),
    ];
  }
}
