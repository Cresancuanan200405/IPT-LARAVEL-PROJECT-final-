<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

// Specific routes first
Route::get('/contacts', [ContactController::class, 'index']);      // Fetch all contacts
Route::get('/contacts/{id}', [ContactController::class, 'show']);  // Fetch single contact
Route::post('/contacts', [ContactController::class, 'store']);     // Create contact
Route::put('/contacts/{id}', [ContactController::class, 'update']);
Route::delete('/contacts/{id}', [ContactController::class, 'destroy']); // Delete contact
Route::post('/contact', [ContactController::class, 'store']);

// Catch-all route last
Route::view('/{any}', 'app')->where('any', '.*');