<?php

use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Helpers\Auth;
use Tests\Helpers\Genre;

use function Pest\Laravel\getJson;
use function Pest\Laravel\seed;

uses(RefreshDatabase::class);

test('when fetch genres while unauthenticated, should returns error. (HTTP 401)', function () {
  $response = Genre::get();
  $response->assertUnauthorized();
});

test('when fetch genres while logged in, should returns genres data. (HTTP 200)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $response = Genre::get();
  $response->assertOk();
});

test('when create genre with duplicated name, should returns error. (HTTP 422)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  Genre::store('Adventure');
  $response = Genre::store('Adventure');
  $response->assertUnprocessable();
});


test('when create genre while unauthenticated, should returns error. (HTTP 401)', function () {
  $response = Genre::store('Adventure');
  $response->assertUnauthorized();
});

test('when successfully create genre, should returns created genre data. (HTTP 201)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $response = Genre::store('Adventure');
  $response->assertCreated();
  $response->assertJson(['name' => 'Adventure']);
});
