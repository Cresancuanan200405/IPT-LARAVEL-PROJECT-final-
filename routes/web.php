<?php

use Illuminate\Support\Facades\Route;

// Route for the homepage
Route::view('/', 'app');

// SPA catch-all for all non-API paths:
Route::view('/{any}', 'app')->where('any', '^(?!api).*$');