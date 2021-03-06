<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBorrowerRequest extends FormRequest
{
  public function authorize()
  {
    return true;
  }

  public function rules()
  {
    return [
      'visitor_id' => 'nullable|exists:visitors,id',
      'end_date' => 'nullable|date',
      'status' => 'nullable|integer'
    ];
  }
}
