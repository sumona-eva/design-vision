<?php

namespace App\Http\Controllers\Api\Frontend\V1;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slider;
use App\Models\Blog;
use App\Models\TeamMember;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    public function getHeroSlider()
    {
        $heroSlider = Slider::query()->select('image', 'url')->orderBy('order_number')->get();
        return response()->json($heroSlider);
    }

    public function getHomeService()
    {
        $services = Service::all();
        return response()->json($services);
    }

    public function getHomeAboutContent()
    {
        //
    }

    public function getRecentProject()
    {
        $projects = Project::query()->latest()->get();

        return response()->json($projects);
    }

    public function getTeam()
    {
        $teamMembers = TeamMember::query()->latest()->get();

        return response()->json($teamMembers);
    }

    public function getPosts()
    {
        $post = Blog::query()->latest()->get();

        return response()->json($post);
    }

    public function getSinglePost($slug)
    {
        $post = Blog::query()->where('slug', $slug)->first();


        return response()->json($post);
    }
}
