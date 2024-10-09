<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\CategoryResource;
use App\Http\Resources\V1\SliderResource;
use App\Models\Category;
use App\Models\Slider;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function allSlider(){
        $sliders = Slider::query()
            ->orderBy('order_level')
            ->get();

        return SliderResource::collection($sliders);
    }
    public function allCategory(){
        $category = Category::query()->get();

        return CategoryResource::collection($category);
    }
}
