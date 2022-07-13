<?php

use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Database\Seeders\UserSeeder;
use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Helpers\Auth;
use Tests\Helpers\Borrower;
use Tests\Helpers\Genre;
use Tests\Helpers\Book;
use Tests\Helpers\Visitor;

use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\seed;

uses(RefreshDatabase::class);

function createKakaVisitor()
{
  $visitor = Visitor::store([
    'name' => 'Kaka',
    'birth_date' => CarbonImmutable::create(2001, 10, 3),
    'gender' => 1,
    'email' => 'kaka@mail.com',
  ]);

  return $visitor;
}

function createAdventureGenre()
{
  $genre = Genre::store('Adventure');

  return $genre;
}

function createBook()
{
  $genre = createAdventureGenre();

  $book = Book::store([
    'title' => 'The Blossom',
    'genre_id' => $genre->json('id'),
    'isbn' => '978-3-16-148410-0',
    'total_copies_owned' => 20,
    'published_at' => CarbonImmutable::create(2014, 10, 20),
  ]);

  return $book;
}

function createBorrower()
{
  $visitor = createKakaVisitor();
  $book = createBook();

  $borrower = Borrower::store([
    'visitor_id' => $visitor->json('id'),
    'book_id' => $book->json('id'),
    'end_date' => Carbon::now()->addDays(3),
  ]);

  return $borrower;
}

test('when successfully create borrower, should returns created borrower data. (HTTP 201)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  $visitor = createKakaVisitor();
  $book = createBook();

  Borrower::store([
    'visitor_id' => $visitor->json('id'),
    'book_id' => $book->json('id'),
    'end_date' => Carbon::now()->addDays(3),
  ]);

  assertDatabaseHas('borrowers', [
    'visitor_id' => $visitor->json('id'),
    'book_id' => $book->json('id'),
  ]);
});

test('when successfully fetch all borrowers, should returns correct borrowers data. (HTTP 200)', function () {
  seed(UserSeeder::class);
  Auth::login('admin@booker.com', '00000000');

  createBorrower();
  $response = Borrower::get();
  $response->dump();
});
