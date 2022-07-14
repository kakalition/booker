<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, mixed>
   */
  public function rules()
  {
    return [
      'title' => 'required|string|unique:books,title',
      'isbn' => 'required|string|unique:books,isbn',
      'author_id' => 'required|exists:authors,id',
      'publisher_id' => 'required|exists:publishers,id',
      'genre_id' => 'required|exists:genres,id',
      'total_copies_owned' => 'required|integer',
      'published_at' => 'required|date',
    ];
  }
}
