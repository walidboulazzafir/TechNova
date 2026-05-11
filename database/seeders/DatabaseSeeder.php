<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create admin user
        $user = User::factory()->create([
            'name'     => 'Alex Tech',
            'email'    => 'admin@technova.com',
            'password' => bcrypt('password'),
        ]);

        // Create categories
        $ai    = Category::create(['name' => 'IA & Robotique',    'slug' => 'ai']);
        $web   = Category::create(['name' => 'Développement Web', 'slug' => 'web']);
        $cloud = Category::create(['name' => 'Cloud Computing',   'slug' => 'cloud']);

        // Create posts
        Post::create([
            'user_id'     => $user->id,
            'category_id' => $ai->id,
            'title'       => "L'IA Générative en 2026",
            'slug'        => 'ia-generative-2026',
            'excerpt'     => "À quoi s'attendre de la prochaine génération de LLM.",
            'body'        => "Bienvenue dans le futur. Alors que nous entrons en 2026, le paysage de l'Intelligence Artificielle est passé de simples modèles génératifs à des agents autonomes capables de raisonnements complexes.",
            'icon'        => '🤖',
            'read_time'   => 4,
        ]);

        Post::create([
            'user_id'     => $user->id,
            'category_id' => $web->id,
            'title'       => "La mort des Bundlers ?",
            'slug'        => 'mort-des-bundlers',
            'excerpt'     => "L'ESM natif prend d'assaut le monde du développement web.",
            'body'        => "Les bundlers comme Webpack ont dominé pendant des années. Mais avec l'arrivée de l'ESM natif, les choses commencent à changer radicalement.",
            'icon'        => '🌐',
            'read_time'   => 6,
        ]);

        Post::create([
            'user_id'     => $user->id,
            'category_id' => $ai->id,
            'title'       => "L'avenir de l'automatisation industrielle",
            'slug'        => 'avenir-automatisation-industrielle',
            'excerpt'     => "Comment les robots humanoïdes entrent dans le monde du travail.",
            'body'        => "Les robots humanoïdes ne sont plus de la science fiction. En 2026, ils commencent à apparaître dans les usines et les entrepôts du monde entier.",
            'icon'        => '🦾',
            'read_time'   => 7,
        ]);
    }
}