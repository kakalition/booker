<?php

use App\Http\Resources\BorrowerResource;
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
use function Pest\Laravel\assertDatabaseMissing;
use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;
use function Pest\Laravel\seed;

uses(RefreshDatabase::class);

it('has modelauthor page', function () {
  seed(UserSeeder::class);
  $user = Auth::login('admin@booker.com', '00000000');

  $response = postJson('/api/authors', [
    'name' => 'Kaka',
    'birth_date' => CarbonImmutable::now()
  ]);
  $response->assertStatus(201);

  $te = getJson('/api/activity-logs');
  $te->dump();
});
