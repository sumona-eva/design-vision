<?php

use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\ProjectController;
use App\Http\Controllers\Api\V1\SliderController;
use App\Http\Controllers\Api\Frontend\ProjectController as FrontendProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', \App\Http\Controllers\Api\Auth\LoginCotroller::class);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//dashboard route
Route::prefix('v1')->group(function () {
    Route::apiResources([
        'project-category' => CategoryController::class,
        'project' => ProjectController::class,
        'slider' => SliderController::class,
    ]);
});

//frontend Route
Route::prefix('frontend')->group(function (){
   Route::apiResources([
       'project' => FrontendProjectController:: class,
   ]);
});

//frontend route

Route::get('/storage', fn()=> \Illuminate\Support\Facades\Artisan::call('storage:link'));
