<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecipeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'title'         => $this->title,
            'author'        => $this->author,
            'description'   => $this->description,
            'cooking_time'  => $this->cooking_time,
            'serving_size'  => $this->serving_size,
            'main_image'    => $this->main_image,
            'ingredients'   => IngredientResource::collection($this->ingredients),
            'steps'         => StepResource::collection($this->steps()->orderBy('step_number')->get()),
        ];
    }
}
