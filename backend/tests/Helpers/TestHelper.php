<?php

namespace Tests\Helpers;

abstract class TestHelper
{
  abstract static function get();
  abstract static function store(array $data);
  abstract static function update(string $id, array $data);
  abstract static function delete(string $id);
}
