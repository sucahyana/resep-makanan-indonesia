<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Str;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\Step;
use App\Models\StepImage;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $recipeId = Str::uuid();

        $recipe = Recipe::create([
            'id'            => $recipeId,
            'title'         => '16. Pastel renyah tanpa telur',
            'author'        => 'Sinta Aura Nisa',
            'description'   => 'Source: ibnu kicthen Assalamualaikum, halo aku mau buat pastel tanpa telur sekalian ikutan yuk langgung aja  Resep asli 👇👇 https://cookpad.com/id/resep/14881791-pastel-tanpa-telur-dan-tanpa-margarin?invite_token=ovE5uSZ8QTuYkXtEVi9C8akb&shared_at=1619941777.maaf lupa jadi berapa karna beberapa hari yg lalu bikinnya',
            'cooking_time'  => '30 menit kurleb',
            'serving_size'  => 'sekitar 20 biji',
            'main_image'    => 'https://img-global.cpcdn.com/recipes/4a1db449feed88d1/680x482cq70/16pastel-renyah-tanpa-telur-foto-resep-utama.jpg',
        ]);

        $ingredients = [
            ['category' => 'Bahan kulit', 'content' => '250 gram tepung terigu serbaguna'],
            ['category' => 'Bahan kulit', 'content' => '2 sdm tepung tapioka'],
            ['category' => 'Bahan kulit', 'content' => '2 sdm minyak sayur'],
            ['category' => 'Bahan kulit', 'content' => 'Secukupnya kaldu bubuk & garam'],
            ['category' => 'Bahan kulit', 'content' => '150 air panas mendidih'],
            ['category' => 'Bahan isian', 'content' => '3 bungkus mi goreng (masak sampai matang)aku pake makaroni'],
        ];

        foreach ($ingredients as $item) {
            Ingredient::create([
                'id'        => Str::uuid(),
                'recipe_id' => $recipeId,
                'category'  => $item['category'],
                'content'   => $item['content'],
            ]);
        }

        $steps = [
            'Campur kan semua bahan kulit aduk pake sendok/spatula setelah sedikit hangat ulen dengan tangan',
            'Diamkan adonan selama 15 menit tutup dengan plastik wrap (agar adonan elastis)',
            'Setelah 15 menit ulen sebentar lalu ambil sedikit adonan pipihkan lalu cetak bulat lalu beri isian lalu bungkus dan tekan² ujung nya dan bentuk seperti pastel lakukan sampai adonan habis,bisa juga pake cetakan pastel',
            'Lalu goreng di minyak panas dengan api sedang sampai berwarna kecokelatan lalu angkat & tiriskan siap di sajikan',
            'Selamat mencoba 😊😊🙏'
        ];

        foreach ($steps as $index => $content) {
            Step::create([
                'id'         => Str::uuid(),
                'recipe_id'  => $recipeId,
                'step_number'=> $index + 1,
                'content'    => $content,
            ]);
        }
    }
}
