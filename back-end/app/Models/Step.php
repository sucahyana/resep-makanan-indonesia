<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Step extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipe_id',
        'step_number',
        'content',
    ];

    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (!$model->id) $model->id = (string) Str::uuid();
        });
    }

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }

    public function images()
    {
        return $this->hasMany(StepImage::class);
    }
}
