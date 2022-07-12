<?php

use Database\Seeders\DatabaseSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;

use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;
use function Pest\Laravel\seed;

uses(RefreshDatabase::class);

test('when fetch genres while unauthenticated, should returns error. (HTTP 401)', function () {
  $response = getJson('/api/genres');
  $response->assertUnauthorized();
});

test('when fetch genres while logged in, should returns genres data. (HTTP 200)', function () {
  seed(UserSeeder::class);

  $user = login('admin@booker.com', '00000000');

  $response = getJson('/api/genres');
  $response->assertOk();
});
