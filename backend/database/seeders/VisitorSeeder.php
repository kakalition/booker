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
    Visitor::create([
      'name' => 'Kaka',
      'birth_date' => CarbonImmutable::create(2001, 10, 3),
      'gender' => 1,
      'email' => 'kaka@mail.com',
    ]);
  }
}
