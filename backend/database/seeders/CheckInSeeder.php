<?php

namespace Database\Seeders;

use App\Models\CheckIn;
use App\Models\Visitor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CheckInSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    CheckIn::factory()
      ->count(1)
      ->for(Visitor::factory())
      ->create();
  }
}
