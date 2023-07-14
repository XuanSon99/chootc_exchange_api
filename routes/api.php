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

Route::get('p2p', 'App\Http\Controllers\RateController@getPrice');
Route::get('bank', 'App\Http\Controllers\RateController@getBankInfo');
Route::post('buy-order', 'App\Http\Controllers\BuyOrderController@addOrder');
Route::post('sell-order', 'App\Http\Controllers\SellOrderController@addOrder');
Route::resource('setup', 'App\Http\Controllers\SetupController');
Route::get('asset', 'App\Http\Controllers\AssetController@index');

Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::post('change-password', 'App\Http\Controllers\ClientController@change_password');
    Route::post('update-profile', 'App\Http\Controllers\ClientController@updateProfile');
    Route::get('logout', 'App\Http\Controllers\ClientController@logout');
    Route::get('profile', 'App\Http\Controllers\ClientController@getProfile');
    Route::post('add-verify', 'App\Http\Controllers\VerifyController@addVerify');
    Route::get('my-verify', 'App\Http\Controllers\VerifyController@getVerify');
    Route::get('buy-order', 'App\Http\Controllers\BuyOrderController@getOrder');
    Route::get('sell-order', 'App\Http\Controllers\SellOrderController@getOrder');
    Route::get('states', 'App\Http\Controllers\StateController@index');
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
    Route::resource('buyOrder', 'App\Http\Controllers\BuyOrderController');
    Route::resource('sellOrder', 'App\Http\Controllers\SellOrderController');
    Route::resource('state', 'App\Http\Controllers\StateController');

    Route::get('user-info/{phone}', 'App\Http\Controllers\VerifyController@getUserInfo');
    Route::get('overview', 'App\Http\Controllers\ClientController@getOverview');

    Route::group([
        'prefix' => 'search'
    ], function () {
        Route::get('client', 'App\Http\Controllers\ClientController@search');
    });
});

