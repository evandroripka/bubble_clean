<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $pageTitle = 'Staten Island House Cleaning';
    $shareTitle = 'Bubble Clean | Staten Island House Cleaning';
    $shareDescription = 'Reliable, detail-focused cleaning for apartments and homes in Staten Island, NY. Starting from $140.';

    return Inertia::render('Public/Home', [
        'pageTitle' => $pageTitle,
        'contactPhone' => (string) env('VITE_CONTACT_PHONE', '+1 (000) 000-0000'),
        'contactEmail' => (string) env('VITE_CONTACT_EMAIL', 'hello@bbcleaner.com'),
        'shareTitle' => $shareTitle,
        'shareDescription' => $shareDescription,
        'pageUrl' => route('home'),
        'shareImageUrl' => url('/images/home/business-cover.webp'),
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
