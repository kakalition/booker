<?php

namespace App\Services;

use App\Models\Visitor;

class VisitorService
{
  public function fetchAll()
  {
    $visitors = Visitor::all();

    return $visitors;
  }

  public function store(array $data)
  {
    $visitor = Visitor::create([
      'name' => $data['name'],
      'birth_date' => $data['birth_date'],
      'gender' => $data['gender'],
      'email' => $data['email'],
    ]);

    return $visitor;
  }

  public function update(Visitor $visitor, array $data)
  {
    $visitor->email = $data['email'];
    $visitor->save();

    return $visitor;
  }

  public function delete(Visitor $visitor)
  {
    $visitor->delete();

    return $visitor;
  }
}
