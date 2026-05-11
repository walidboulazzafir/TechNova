<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\AdminPostController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ==========================================
// PUBLIC ROUTES
// ==========================================

// Home - list all posts
Route::get('/', [PostController::class, 'index'])->name('home');

// Single post
Route::get('/posts/{slug}', [PostController::class, 'show'])->name('posts.show');

// Category page
Route::get('/category/{slug}', [CategoryController::class, 'show'])->name('category.show');

// About page
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Contact page
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

// ==========================================
// ADMIN ROUTES (auth protected)
// ==========================================

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {

    // Dashboard
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    // Posts CRUD
    Route::get('/posts', [AdminPostController::class, 'index'])->name('posts.index');
    Route::get('/posts/create', [AdminPostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [AdminPostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post}/edit', [AdminPostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [AdminPostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/{post}', [AdminPostController::class, 'destroy'])->name('posts.destroy');

});

// ==========================================
// PROFILE ROUTES (Breeze default)
// ==========================================

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';