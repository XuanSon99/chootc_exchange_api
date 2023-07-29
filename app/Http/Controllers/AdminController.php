<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Client;
use App\Models\BuyOrder;
use App\Models\SellOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index()
    {
        return Admin::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:admins'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Username đã tồn tại!"]], 400);
        }

        $data = new Admin([
            'username' => $request->username,
            'password' => bcrypt($request->password),
            'rules' => $request->rules
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function update(Request $request, Admin $Admin)
    {
        $Admin->update([
            'password' => bcrypt($request->password)
        ]);

        return response()->json(["status" => true], 200);
    }

    public function destroy(Admin $Admin)
    {
        if ($Admin->username == "administrator") {
            return response()->json(["status" => false], 400);
        }
        $Admin->delete();
        return response()->json(["status" => true], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|exists:admins',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Tài khoản không tồn tại!"]], 400);
        }

        $Admin = Admin::where("username", $request->username)->first();

        if (!Hash::check($request->password, $Admin->password)) {
            return response()->json(["status" => false, "message" => ["Mật khẩu không đúng!"]], 400);
        }

        $tokenResult = $Admin->createToken('Personal Access Token');
        $token = $tokenResult->token;
        $token->save();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'username' => $request->username,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }

    public function getInfo(Request $request)
    {
        $username = $request->route('username');
        $info = Admin::where("username", $username)->first();
        return $info;
    }

    public function getOverview()
    {
        $list = new \stdClass();
        $list->new_user = Client::whereDate('created_at', Carbon::today())->count();
        $list->total_user = Client::All()->count();

        $list->new_buy_order = BuyOrder::whereDate('created_at', Carbon::today())->where('status', 1)->count();
        $list->total_buy_order = BuyOrder::where('status', 1)->count();

        $list->new_sell_order = SellOrder::whereDate('created_at', Carbon::today())->where('status', 1)->count();
        $list->total_sell_order = SellOrder::where('status', 1)->count();
        return $list;
    }
}
