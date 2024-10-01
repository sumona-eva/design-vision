<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{


    use HasFactory;

    protected $fillable = ['title','slug','category_id','order_number','description','cover_image'];
    public function Category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->hasMany(ProjectImage::class);
    }

    public function specification()
    {
        return $this->hasMany(ProjectSpecification::class);
    }
}
