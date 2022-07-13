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
      'book_id' => 'nullable|exists:books,id',
      'end_date' => 'nullable|date',
    ];
  }
}
