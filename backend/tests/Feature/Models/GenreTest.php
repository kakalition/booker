<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

use function Pest\Laravel\getJson;

uses(RefreshDatabase::class);

test('when fetch genres, should returns correct data. (HTTP 200)', function () {
  $response = getJson('/api/genres');
  $response->assertUnauthorized();
});
