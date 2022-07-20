<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityLogResource extends JsonResource
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
      'name' => $this->name,
      'code' => $this->code == 0
        ? 'CREATE'
        : ($this->code == 1
          ? 'UPDATE'
          : 'DELETE'),
      'message' => $this->message
    ];
  }
}
