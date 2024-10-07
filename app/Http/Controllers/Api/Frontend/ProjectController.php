<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\projectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function index()
    {
        $project = Project::query()
            ->select('slug','id', 'cover_image')
            ->paginate(20);

        return ProjectResource::collection($project);
    }

    public function show(string $slug)
    {
        $project = Project::query()
            ->where('slug', $slug)
            ->with(['category','specification','images'])
            ->first();

        return ProjectResource::make($project);
    }

}
