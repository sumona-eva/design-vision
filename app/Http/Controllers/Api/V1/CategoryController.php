<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\CategoryRequest;
use App\Http\Resources\V1\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpCache\ResponseCacheStrategy;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category = Category::query()->get();

        return CategoryResource::collection($category);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $data = $request->validated();
//        return $data;
        $data['slug'] = Str::slug($data['name']);
        $category = Category::query()->create($data);

        return CategoryResource::make($category);

    }


    public function update(CategoryRequest $request, string $id)
    {
        $category = Category::query()->findOrFail($id);
        $data = $request->validated();
        $data['slug'] = Str::slug($data['name']);

        $category -> update($data);

        return CategoryResource::make($category);
    }

    public function destroy(string $id)
    {
        $category = Category::query()->findOrFail($id);

        $category->delete();

        return Response::HTTP_OK;

    }
}
