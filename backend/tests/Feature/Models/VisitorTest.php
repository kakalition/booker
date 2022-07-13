<?php

use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Helpers\Auth;
use Tests\Helpers\Genre;
use Tests\Helpers\Visitor;

use function Pest\Laravel\getJson;
use function Pest\Laravel\seed;

uses(RefreshDatabase::class);

test('when successfully fetch visitors, should returns visitors data. (HTTP 200)', function () {
  seed(UserSeeder::class);
  $a = Auth::login('admin@booker.com', '00000000');

  $response = Visitor::get();
  $response->dump();
  $response->assertOk();
});
