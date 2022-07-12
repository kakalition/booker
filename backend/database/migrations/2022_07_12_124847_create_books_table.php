<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('books', function (Blueprint $table) {
      $table->id();
      $table->string('isbn');
      $table->string('title');
      $table->foreignId('genre_id')
        ->references('id')
        ->on('genres')
        ->cascadeOnDelete();
      $table->integer('total_copies_owned');
      $table->integer('total_copies_available');
      $table->timestamp('published_at');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('books');
  }
};
