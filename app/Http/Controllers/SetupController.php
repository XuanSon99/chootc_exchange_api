<?php

namespace App\Http\Controllers;

use App\Models\Setup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;
use Illuminate\Support\Facades\Auth;

class SetupController extends Controller
{
    public function index()
    {
        return Setup::orderBy('created_at', 'DESC')->get();
    }

    // public function store(Request $request)
    // {
    //     Setup::create($request->all());

    //     return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    // }

    public function show(Setup $Setup)
    {
        return $Setup;
    }

    public function updateSetup(Request $request)
    {
        Setup::where('name', $request->name)->update(['value' => $request->value]);
        return response()->json(["status" => true], 200);
    }

    // public function destroy(Setup $Setup)
    // {
    //     $Setup->delete();
    //     return response()->json(["status" => true], 200);
    // }

}
