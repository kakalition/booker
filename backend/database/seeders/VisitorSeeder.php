<?php

namespace Database\Seeders;

use App\Models\Visitor;
use Carbon\CarbonImmutable;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VisitorSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Visitor::factory()
      ->count(10)
      ->create();
  }
}
