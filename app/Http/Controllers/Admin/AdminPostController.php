<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminPostController extends Controller
{
    public function index()
    {
        $posts = Post::with('category')->latest()->get();
        return Inertia::render('Admin/Posts/Index', [
            'posts' => $posts
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Posts/Form', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'excerpt'     => 'required|string',
            'body'        => 'required|string',
            'icon'        => 'nullable|string',
            'read_time'   => 'nullable|integer',
        ]);

        Post::create([
            'user_id'     => auth()->id(),
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'slug'        => Str::slug($request->title),
            'excerpt'     => $request->excerpt,
            'body'        => $request->body,
            'icon'        => $request->icon ?? '📄',
            'read_time'   => $request->read_time ?? 3,
        ]);

        return redirect()->route('admin.posts.index')
            ->with('success', 'Article créé avec succès!');
    }

    public function edit(Post $post)
    {
        $categories = Category::all();
        return Inertia::render('Admin/Posts/Form', [
            'post'       => $post,
            'categories' => $categories
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'excerpt'     => 'required|string',
            'body'        => 'required|string',
            'icon'        => 'nullable|string',
            'read_time'   => 'nullable|integer',
        ]);

        $post->update([
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'slug'        => Str::slug($request->title),
            'excerpt'     => $request->excerpt,
            'body'        => $request->body,
            'icon'        => $request->icon ?? '📄',
            'read_time'   => $request->read_time ?? 3,
        ]);

        return redirect()->route('admin.posts.index')
            ->with('success', 'Article modifié avec succès!');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('admin.posts.index')
            ->with('success', 'Article supprimé!');
    }
}