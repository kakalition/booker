<?php

use Carbon\CarbonImmutable;
use Database\Seeders\GenreSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Auth\Events\Logout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Helpers\Auth;
use Tests\Helpers\Book;
use Tests\Helpers\Genre;

use function Pest\Laravel\getJson;
use function Pest\Laravel\seed;

uses(RefreshDatabase::class);

$bookOne = [
  'title' => 'The Blossom',
  'isbn' => '978-3-16-148410-0',
  'total_copies_owned' => 20,
  'published_at' => CarbonImmutable::now(),
];

function appendGenre($bookData)
{
  seed(GenreSeeder::class);

  $genres = Genre::get();
  $firstGenreId = $genres[0]['id'];
  $bookData['genre_id'] = $firstGenreId;

  return $bookData;
}

test('when create book with duplicated data, should returns error. (HTTP 422)', function () use ($bookOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $bookData = appendGenre($bookOne);

  Book::store($bookData);
  $response = Book::store($bookData);
  $response->assertUnprocessable();
});

test('when create book while unauthenticated, should returns error. (HTTP 401)', function () use ($bookOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');
  $bookData = appendGenre($bookOne);
  Auth::logout();

  $response = Book::store($bookData);
  $response->assertUnauthorized();
});

test('when successfully create book, should returns book data. (HTTP 201)', function () use ($bookOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $bookData = appendGenre($bookOne);

  $response = Book::store($bookData);
  $response->assertOk();
});

test('when fetch books while unauthenticated, should returns error. (HTTP 401)', function () {
  $response = Book::get();
  $response->assertUnauthorized();
});

test('when successfully fetch books, should returns books data. (HTTP 200)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $response = Book::get();
  $response->assertOk();
});
