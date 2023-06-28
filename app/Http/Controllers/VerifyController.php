<?php

namespace App\Http\Controllers;

use App\Models\Verify;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class VerifyController extends Controller
{
    public function index()
    {
        return Verify::orderBy('created_at', 'DESC')->paginate(10);
    }

    public function addVerify(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|unique:verifies'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Yêu cầu đã được gửi!"]], 400);
        }

        $front_photo = $request->file('front_photo')->store('public/images');
        $back_photo = $request->file('back_photo')->store('public/images');
        $portrait_photo = $request->file('portrait_photo')->store('public/images');

        $data = new Verify([
            'phone' => $request->phone
            'name' => $request->name,
            'front_photo' => str_replace("public", "", $front_photo),
            'back_photo' => str_replace("public", "", $back_photo),
            'portrait_photo' => str_replace("public", "", $portrait_photo) 
        ]);
        $data->save();

        return response()->json(["status" => true, "data" =>  $data], 201);
    }

    public function getVerify(Request $request)
    {
        return Verify::where("phone", $request->user()->phone)->orderBy('created_at', 'DESC')->first();
    }

    // public function update(Request $request, Verify $Verify)
    // {
    //     if ($request->file('front_photo')) {
    //         $front_photo = $request->file('front_photo')->store('public/images');
    //         $Verify['front_photo'] = str_replace("public", "", $front_photo);
    //     }
    //     if ($request->file('back_photo')) {
    //         $back_photo = $request->file('back_photo')->store('public/images');
    //         $Verify['back_photo'] = str_replace("public", "", $back_photo);
    //     }
    //     if ($request->file('portrait_photo')) {
    //         $portrait_photo = $request->file('portrait_photo')->store('public/images');
    //         $Verify['portrait_photo'] = str_replace("public", "", $portrait_photo);
    //     }

    //     $Verify->update($request->except(['front_photo', 'back_photo', 'portrait_photo']));

    //     return response()->json(["status" => true, "data" => $request->all()], 200);
    // }

    public function update(Request $request, Verify $Verify)
    {
        $Verify->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Verify $Verify)
    {
        $Verify->delete();
        return response()->json(["status" => true], 200);
    }

    public function getUserInfo(Request $request)
    {
        $phone = $request->route('phone');
        $info = Verify::where("phone", $phone)->first();
        return $info;
    }
}
