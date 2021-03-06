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

test('when update genre with duplicated name, should returns error. (HTTP 422)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');
  Genre::store('Mystery');
  $genre = Genre::store('Adventure');

  $response = Genre::update($genre->json('id'), 'Mystery');
  $response->assertUnprocessable();
});

test('when update genre while unauthenticated, should returns error. (HTTP 401)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');
  $genre = Genre::store('Adventure');
  Auth::logout();

  $response = Genre::update($genre->json('id'), 'Romance');
  $response->assertUnauthorized();
});

test('when successfully update genre, should returns updated genre data. (HTTP 200)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');
  $genre = Genre::store('Adventure');

  $response = Genre::update($genre->json('id'), 'Romance');
  $response->assertOk();
  $response->assertJson(['name' => 'Romance']);
});

test('when delete genre while unauthenticated, should returns error. (HTTP 401)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');
  $genre = Genre::store('Adventure');
  Auth::logout();

  $response = Genre::delete($genre->json('id'));
  $response->assertUnauthorized();
});


test('when successfully delete genre, should returns no content. (HTTP 204)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');
  $genre = Genre::store('Adventure');

  $response = Genre::delete($genre->json('id'));
  $response->assertNoContent();
});
