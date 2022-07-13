<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBorrowerRequest extends FormRequest
{
  public function authorize()
  {
    return false;
  }

  public function rules()
  {
    return [
      'visitor_id' => 'exists:visitors,id',
      'book_id' => 'exists:books,id',
      'end_date' => 'date',
    ];
  }
}
