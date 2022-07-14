<?php

namespace Database\Seeders;

use App\Models\Floor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FloorSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Floor::create(['number' => 0]);
    Floor::create(['number' => 1]);
    Floor::create(['number' => 1]);
    Floor::create(['number' => 1]);
    Floor::create(['number' => 1]);
  }
}
