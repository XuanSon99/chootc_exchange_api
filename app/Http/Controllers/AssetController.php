<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;
use Illuminate\Support\Facades\Auth;

class AssetController extends Controller
{
    public function index()
    {
        return Asset::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'symbol' => 'required|unique:assets'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Symbol đã tồn tại!"]], 400);
        }

        $data = new Asset([
            'symbol' => $request->symbol,
            'buy_rate' => $request->buy_rate,
            'sell_rate' => $request->sell_rate,
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function update(Request $request, Asset $Asset)
    {
        $Asset->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Asset $Asset)
    {
        $Asset->delete();
        return response()->json(["status" => true], 200);
    }

}
