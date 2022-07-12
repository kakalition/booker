<?php

namespace Tests\Helpers;

use function Pest\Laravel\postJson;

class Auth
{
  static function register($name, $email, $password)
  {
    $response = postJson('/register', [
      'name' => $name,
      'email' => $email,
      'password' => $password
    ]);
    return $response;
  }


  static function login($email, $password)
  {
    $response = postJson('/login', ['email' => $email, 'password' => $password]);
    return $response;
  }

  static function logout()
  {
    $response = postJson('/logout');
    return $response;
  }
}
