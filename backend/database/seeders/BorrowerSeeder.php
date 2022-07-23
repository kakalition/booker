<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\Borrower;
use App\Models\Genre;
use App\Models\Publisher;
use App\Models\Visitor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BorrowerSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Borrower::factory()
      ->count(1)
      ->for(Visitor::factory()->state(['name' => 'Kaka']))
      ->for(
        Book::factory()
          ->for(Author::factory())
          ->for(Publisher::factory())
          ->for(Genre::factory())
      )
      ->create();
  }
}
