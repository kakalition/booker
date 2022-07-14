<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookRequest extends FormRequest
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
      'title' => 'nullable|string|unique:books,title',
      'isbn' => 'nullable|string|unique:books,isbn',
      'author_id' => 'nullable|exists:authors,id',
      'publisher_id' => 'nullable|exists:publishers,id',
      'genre_id' => 'nullable|exists:genres,id',
      'total_copies_owned' => 'nullable|integer',
      'published_at' => 'nullable|date',
    ];
  }
}
