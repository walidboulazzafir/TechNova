<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show($slug)
    {
        $category = Category::with(['posts' => function($query) {
            $query->with('author')->latest();
        }])
        ->where('slug', $slug)
        ->firstOrFail();

        return Inertia::render('Category', [
            'category' => $category
        ]);
    }
}