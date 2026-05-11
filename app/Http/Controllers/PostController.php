<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use Inertia\Inertia;

class PostController extends Controller
{
    // Home page - list all posts
    public function index()
    {
        $posts = Post::with(['category', 'author'])
            ->latest()
            ->get();

        return Inertia::render('Home', [
            'posts' => $posts
        ]);
    }

    // Single post page
    public function show($slug)
    {
        $post = Post::with(['category', 'author'])
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('Posts/Show', [
            'post' => $post
        ]);
    }
}