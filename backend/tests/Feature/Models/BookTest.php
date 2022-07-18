<?php

use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Database\Seeders\BookSeeder;
use Database\Seeders\GenreSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\VisitorSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Helpers\Auth;
use Tests\Helpers\Book;
use Tests\Helpers\Genre;

use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;
use function Pest\Laravel\seed;

uses(RefreshDatabase::class);

/* $bookOne = [
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

test('when successfully create book, should returns book data. (HTTP 201)', function () use ($bookOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $bookData = appendGenre($bookOne);

  $response = Book::store($bookData);
  $response->assertCreated();
});

test('when successfully fetch books, should returns books data. (HTTP 200)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $response = Book::get();
  $response->assertOk();
});

test('when update book with duplicated data, should returns error. (HTTP 422)', function () use ($bookOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');
  $bookData = appendGenre($bookOne);
  $book = Book::store($bookData);

  $response = Book::update($book->json('id'), [
    'title' => 'The Blossom'
  ]);
  $response->assertUnprocessable();
});

test('when successfully update book, should returns updated book data. (HTTP 200)', function () use ($bookOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');
  $bookData = appendGenre($bookOne);
  $book = Book::store($bookData);

  $response = Book::update($book->json('id'), [
    'title' => 'The Rain'
  ]);
  $response->assertOk();
  $response->assertJson(['title' => 'The Rain']);
});

test('when delete book with invalid ID, should returns error. (HTTP 404)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $response = Book::delete(9);
  $response->assertNotFound();
});

test('when successfully delete book , should returns no content. (HTTP 204)', function () use ($bookOne) {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $bookData = appendGenre($bookOne);
  $bookEntity = Book::store($bookData);

  $response = Book::delete($bookEntity->json('id'));
  $response->assertNoContent();
}); */

test('when test, should test. (HTTP 201)', function () {
  seed([UserSeeder::class, BookSeeder::class, VisitorSeeder::class]);
  Auth::login('admin@booker.com', '00000000');

  $book = Book::get();
  $bookId = $book->json(0)['id'];
  $re1 = getJson("/api/books/$bookId")->dump();

  $response = postJson('/api/borrowers', [
    'visitor_id' => 1,
    'book_id' => $book->json(0)['id'],
    'total_borrowed' => 1,
    'end_date' => Carbon::now()->addDays(3),
  ]);
  $response->assertCreated();

  $re2 = getJson("/api/books/$bookId")->dump();
});
