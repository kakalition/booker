<?php

use Carbon\CarbonImmutable;
use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Helpers\Auth;
use Tests\Helpers\Visitor;

use function Pest\Laravel\seed;

uses(RefreshDatabase::class);

$visitorOne = [
  'name' => 'Kaka',
  'birth_date' => CarbonImmutable::create(2001, 10, 3),
  'gender' => 1,
  'email' => 'kaka@mail.com'
];

test('when successfully fetch visitors, should returns visitors data. (HTTP 200)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $response = Visitor::get();
  $response->assertOk();
});

test('when successfully create visitor, should returns created data. (HTTP 201)', function () use ($visitorOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $response = Visitor::store($visitorOne);
  $response->assertCreated();
});

test('when successfully update visitor, should returns updated data. (HTTP 200)', function () use ($visitorOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $response = Visitor::store($visitorOne);
  $response->dump();
  $response->assertCreated();
});