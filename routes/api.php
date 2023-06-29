<?php

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

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'App\Http\Controllers\ClientController@login');
    Route::post('signup', 'App\Http\Controllers\ClientController@signup');
    Route::get('verify', 'App\Http\Controllers\ClientController@verify')->name('verify');
    Route::post('re-verify', 'App\Http\Controllers\ClientController@re_verify');
    Route::post('forgot-password', 'App\Http\Controllers\ClientController@forgot_password');
});

Route::post('add-order', 'App\Http\Controllers\OrderController@addOrder');

Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::post('change-password', 'App\Http\Controllers\ClientController@change_password');
    Route::get('logout', 'App\Http\Controllers\ClientController@logout');
    Route::get('profile', 'App\Http\Controllers\ClientController@getProfile');
    Route::post('add-verify', 'App\Http\Controllers\VerifyController@addVerify');
    Route::get('my-verify', 'App\Http\Controllers\VerifyController@getVerify');
});

Route::group([
    'prefix' => 'admin'
], function () {
    Route::post('login', 'App\Http\Controllers\AdminController@login');
});

Route::resource('admin', 'App\Http\Controllers\AdminController');

Route::group([
    'middleware' => 'auth:admin'
], function () {

    Route::resource('client', 'App\Http\Controllers\ClientController');
    Route::resource('verify', 'App\Http\Controllers\VerifyController');
    Route::resource('order', 'App\Http\Controllers\OrderController');

    Route::get('user-info/{phone}', 'App\Http\Controllers\VerifyController@getUserInfo');
    Route::get('overview', 'App\Http\Controllers\ClientController@getOverview');

    Route::group([
        'prefix' => 'search'
    ], function () {
        Route::get('client', 'App\Http\Controllers\ClientController@search');
    });
});

