<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\SliderResource;
use App\Http\Requests\V1\SliderRequest;
use App\Models\Slider;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SliderController extends Controller
{

    public function index():\Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        $sliders = Slider::query()
            ->orderBy('order_level')
            ->paginate();

        return SliderResource::collection($sliders);
    }

    public function store(SliderRequest $request): SliderResource
    {
        $data = $request->validated();
        if($request->hasFile('image')){
            $data['image'] = '/storage/'.$request->file('image')->store('uploads','public');
        }
        $slider = Slider::query()->create($data);

        return SliderResource::make($slider);
    }

    public function show($id): SliderResource
    {
        $slider = Slider::find($id);

        return SliderResource::make($slider);
    }

    public function update(SliderRequest $request, string $id)
    {
        $slider = Slider::query()->find($id);
        $data = $request->validated();
        if($request->hasFile('images')){
            $data['image'] = '/storage/'.$request->file('images')->store('uploads','public');
        }
        $slider->update($data);

        return SliderResource::make($slider);
    }

    public function destroy(string $id)
    {
        $slider = Slider::query()->find($id);
        $slider->delete();
        return Response::HTTP_OK;
    }
}
