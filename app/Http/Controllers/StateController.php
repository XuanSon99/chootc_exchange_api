<?php

namespace App\Http\Controllers;

use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    public function index()
    {
        return State::orderBy('created_at', 'DESC')->get();
    }
    public function store(Request $request)
    {
        $data = new State([
            'color' => $request->color,
            'description' => $request->description,
            'status' => $request->status
        ]);
        $data->save();

        return response()->json(["status" => true], 201);
    }
    public function update(Request $request, State $State)
    {
        $State->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(State $State)
    {
        $State->delete();
        return response()->json(["status" => true], 200);
    }
    public function show(State $State)
    {
        return $State;
    }
}
