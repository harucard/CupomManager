<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CupomController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SaleController;
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
//Route::resource('Sale', SaleController::class)->name('index','sale');
Route::resource('cupons',CupomController::class)->name('index','cupons');
Route::resource('products',ProductController::class)->name('index','products');
Route::resource('sales',SaleController::class)->name('index','sales');
