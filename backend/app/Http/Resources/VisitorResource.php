<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VisitorResource extends JsonResource
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
      'gender' => $this->gender == 1 ? 'Male' : 'Female',
      'email' => $this->email,
      'overdue_borrows' => $this->overdueBorrows(),
      'created_at' => $this->created_at,
    ];
  }
}
