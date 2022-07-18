<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition()
  {
    return [
      'title' => $this->faker->sentence(),
      'isbn' => $this->faker->uuid(),
      'total_copies_owned' => $this->faker->numberBetween(50, 200),
      'published_at' => $this->faker->date()
    ];
  }
}
