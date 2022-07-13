<?php

namespace Tests\Helpers;

abstract class TestHelper
{
  abstract static function get();
  abstract static function store(array $data);
  abstract static function update(int $id, array $data);
  abstract static function delete(int $id);
}
