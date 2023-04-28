<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SiteController;
use App\Models\Section;
use App\Models\Site;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'sections' => Site::with('sections')->first()->sections
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'sections' => Site::with('sections')->first()->sections
        ]);
    })->name('dashboard');

    Route::put('/reorder', [SectionController::class, 'reorder'])->name('section.reorder');
    Route::put('/section/{section}', [SectionController::class, 'update'])->name('section.update');

    Route::get('/settings', [SiteController::class, 'edit'])->name('site.edit');
    Route::patch('/site/{site}', [SiteController::class, 'update'])->name('site.update');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
