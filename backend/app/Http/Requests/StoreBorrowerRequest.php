<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBorrowerRequest extends FormRequest
{
  public function authorize()
  {
    return true;
  }

  public function rules()
  {
    return [
      'visitor_id' => 'required|exists:visitors,id',
      'book_id' => 'required|exists:books,id',
      'end_date' => 'required|date',
    ];
  }
}
