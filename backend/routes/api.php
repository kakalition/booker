<?php

use App\Http\Controllers\ActivityLogController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BorrowerController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\ShelfController;
use App\Http\Controllers\VisitorController;
use App\Http\Middleware\EnsureLoggedIn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::controller(GenreController::class)
  ->middleware(EnsureLoggedIn::class)
  ->group(function () {
    Route::get('/genres', 'index');
    Route::post('/genres', 'store');
    Route::put('/genres/{genre}', 'update');
    Route::patch('/genres/{genre}', 'update');
    Route::delete('/genres/{genre}', 'destroy');
  });

Route::controller(BookController::class)
  //->middleware(EnsureLoggedIn::class)
  ->group(function () {
    Route::get('/books', 'index');
    Route::post('/books', 'store');
    Route::get('/books/{book}', 'show');
    Route::put('/books/{book}', 'update');
    Route::patch('/books/{book}', 'update');
    Route::delete('/books/{book}', 'destroy');
  });

Route::controller(VisitorController::class)
  //->middleware(EnsureLoggedIn::class)
  ->group(function () {
    Route::get('/visitors', 'index');
    Route::post('/visitors', 'store');
    Route::put('/visitors/{visitor}', 'update');
    Route::patch('/visitors/{visitor}', 'update');
    Route::delete('/visitors/{visitor}', 'destroy');
  });

Route::controller(BorrowerController::class)
  //->middleware(EnsureLoggedIn::class)
  ->group(function () {
    Route::get('/borrowers', 'index');
    Route::post('/borrowers', 'store');
    Route::get('/borrowers/{borrower}', 'show');
    Route::put('/borrowers/{borrower}', 'update');
    Route::patch('/borrowers/{borrower}', 'update');
    Route::delete('/borrowers/{borrower}', 'destroy');
  });

Route::apiResources([
  'authors' => AuthorController::class,
  'publishers' => PublisherController::class,
  'shelves' => ShelfController::class,
]);

Route::get('/activity-logs', [ActivityLogController::class, 'index']);

Route::get('/manage-borrowers', [BorrowerController::class, 'manageBorrowers']);