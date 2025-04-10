<?php



namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ingredient;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Ingredient::select('category')
            ->distinct()
            ->whereNotNull('category')
            ->pluck('category');

        return response()->json([
            'categories' => $categories
        ]);
    }
}
