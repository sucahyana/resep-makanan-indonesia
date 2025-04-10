<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StepImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'step_id',
        'image_url',
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

    public function step()
    {
        return $this->belongsTo(Step::class);
    }
}
