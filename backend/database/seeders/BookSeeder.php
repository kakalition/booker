<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\Genre;
use App\Models\Publisher;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Book::factory()
      ->count(4)
      ->for(Author::factory())
      ->for(Publisher::factory())
      ->for(Genre::factory())
      ->create();
  }
}
