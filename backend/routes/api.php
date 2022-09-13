<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserNetworkData;

/*
|--------------------------------------------------------------------------
| API ThemeRoutes
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


Route::post('/saveUserData',[UserNetworkData::class,'saveUserBlockChainData']);
//Route::get('/getUserData/{data?}',[UserNetworkData::class,'getUserBlockChainData']);
Route::get('/getUserData/address/{address?}/netId/{netWorkId?}',[UserNetworkData::class,'getUserBlockChainData']);
//Route::get('/saveUserData',function (){return "salman";});

