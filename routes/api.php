<?php

use App\Http\Controllers\Api\Frontend\V1\HomeController;
use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\ProjectController;
use App\Http\Controllers\Api\Frontend\V1\ServiceController as FrontendServiceController;
use App\Http\Controllers\Api\Frontend\V1\ProjectController as FrontendProjectController;
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
    ]);
});

//frontend route
Route::prefix('frontend')->group(function () {
    Route::get('/slider', [HomeController::class, 'getHeroSlider']);
    Route::get('/service', [HomeController::class, 'getHomeService']);
    Route::get('/recent-project', [HomeController::class, 'getRecentProject']);
    Route::get('/service', [FrontendServiceController::class, 'index']);
    Route::get('/service-detail/{slug}', [FrontendServiceController::class, 'serviceDetail']);
    Route::get('/project', [FrontendProjectController::class, 'index']);
    Route::get('/project-detail/{slug}', [FrontendProjectController::class, 'singleProject']);
    Route::get('/team', [HomeController::class, 'getTeam']);
    Route::apiResource('package', PackageController::class);
    Route::post('/save-inquiry', [RequestController::class, 'saveInquiry']);
    Route::get('/get-posts', [HomeController::class, 'getPosts']);
    Route::get('/get-sligle-post/{slug}', [HomeController::class, 'getSinglePost']);
});

Route::get('/storage', fn()=> \Illuminate\Support\Facades\Artisan::call('storage:link'));
