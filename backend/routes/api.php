<?php

use App\Http\Controllers\GenreController;
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
