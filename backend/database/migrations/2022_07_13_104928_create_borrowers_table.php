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
    Schema::create('borrowers', function (Blueprint $table) {
      $table->id();
      $table->foreignId('visitor_id')
        ->constrained('visitors')
        ->cascadeOnDelete();
      $table->foreignId('book_id')
        ->constrained('books')
        ->cascadeOnDelete();
      $table->integer('total_borrowed');
      $table->timestamp('end_date');
      $table->boolean('status');
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
    Schema::dropIfExists('borrowers');
  }
};
