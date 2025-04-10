<?php


namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use App\Http\Resources\RecipeResource;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::with(['ingredients', 'steps.images'])->latest()->get();
        return RecipeResource::collection($recipes);
    }


    public function show($id)
    {
        $recipe = Recipe::with(['ingredients', 'steps.images'])->findOrFail($id);
        return new RecipeResource($recipe);
    }


    public function search(Request $request)
    {
        $query = $request->input('query');

        $recipes = Recipe::with(['ingredients', 'steps.images'])
            ->where('title', 'like', '%' . $query . '%')
            ->orWhere('author', 'like', '%' . $query . '%')
            ->get();

        return RecipeResource::collection($recipes);
    }
}
