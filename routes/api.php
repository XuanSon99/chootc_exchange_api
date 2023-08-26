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
Route::post('add-verify', 'App\Http\Controllers\VerifyController@addVerify');
Route::put('update-address', 'App\Http\Controllers\SellOrderController@updateAddress');

Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::post('change-password', 'App\Http\Controllers\ClientController@change_password');
    Route::post('update-profile', 'App\Http\Controllers\ClientController@updateProfile');
    Route::get('logout', 'App\Http\Controllers\ClientController@logout');
    Route::get('profile', 'App\Http\Controllers\ClientController@getProfile');
    Route::get('my-verify', 'App\Http\Controllers\VerifyController@getVerify');
    Route::get('buy-order', 'App\Http\Controllers\BuyOrderController@getOrder');
    Route::get('sell-order', 'App\Http\Controllers\SellOrderController@getOrder');
    Route::get('states', 'App\Http\Controllers\StateController@index');
    Route::get('notifications', 'App\Http\Controllers\NotificationController@getNotification');
    Route::put('read-noti', 'App\Http\Controllers\NotificationController@readNotification');
    Route::get('read-all', 'App\Http\Controllers\NotificationController@readAll');
    Route::get('count-noti', 'App\Http\Controllers\NotificationController@CountNotification');
});

Route::group([
    'prefix' => 'admin'
], function () {
    Route::post('login', 'App\Http\Controllers\AdminController@login');
});

Route::group([
    'middleware' => 'auth:admin',
    'prefix' => 'manage'
], function () {
    Route::resource('admin', 'App\Http\Controllers\AdminController');
    Route::get('user-info/{phone}', 'App\Http\Controllers\ClientController@getUserInfo');
    Route::get('info/{username}', 'App\Http\Controllers\AdminController@getInfo');
    Route::resource('client', 'App\Http\Controllers\ClientController');
    Route::resource('verify', 'App\Http\Controllers\VerifyController');
    Route::resource('buy-order', 'App\Http\Controllers\BuyOrderController');
    Route::resource('sell-order', 'App\Http\Controllers\SellOrderController');
    Route::resource('state', 'App\Http\Controllers\StateController');
    Route::resource('notification', 'App\Http\Controllers\NotificationController');
    Route::put('update-setup', 'App\Http\Controllers\SetupController@updateSetup');

    Route::get('overview', 'App\Http\Controllers\AdminController@getOverview');
    Route::get('ref-order', 'App\Http\Controllers\AdminController@getOrderOfMember');

    Route::group([
        'prefix' => 'search'
    ], function () {
        Route::get('client', 'App\Http\Controllers\ClientController@search');
        Route::get('buy-order', 'App\Http\Controllers\BuyOrderController@search');
        Route::get('sell-order', 'App\Http\Controllers\SellOrderController@search');
    });
});
