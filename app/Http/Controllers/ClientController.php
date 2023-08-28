<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Client;
use App\Models\Verify;
use App\Models\Notification;
use Illuminate\Support\Facades\Hash;
use Validator;

class ClientController extends Controller
{
    public function generateKey()
    {
        $key = "";
        for ($x = 1; $x <= 9; $x++) {
            $key .= random_int(0, 9);
        }
        return $key;
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|unique:clients',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Số điện thoại đã tồn tại"]], 400);
        }

        if ($request->referral) {
            $ref = Client::where('phone', '=', $request->referral)->first();
            if (is_null($ref)) {
                return response()->json(["status" => false, "message" => ["Mã giới thiệu không chính xác"]], 401);
            }
        }

        $data = new Client([
            'phone' => $request->phone,
            'password' => bcrypt($request->password),
            'referral' => $request->referral
        ]);
        $data->save();

        $noti = new Notification([
            'phone' => $request->phone,
            'color' => '#01c77d',
            'content' => 'Chúc mừng bạn đã tạo tài khoản thành công. Hãy KYC ngay để giao dịch.',
            'url' => '/profile',
            'is_readed' => 0
        ]);
        $noti->save();

        // try {
        //     MailController::VERIFY($user_id);
        // } catch (\Exception $e) {
        //     Client::where("id", $user_id)->delete();
        //     return response()->json(["status" => false, "message" => ["There were some error when register, please try again."]], 422);
        // }

        return response()->json(["status" => true, "message" => ["Tạo tài khoản thành công"]], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|exists:clients',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Tài khoản không tồn tại"]], 400);
        }

        $user = Client::where("phone", $request->phone)->first();

        if (!Hash::check($request->password, $user->password)) {
            return response()->json(["status" => false, "message" => ["Mật khẩu không đúng"]], 401);
        }

        // if (!$user->email_verified_at) {
        //     try {
        //         MailController::VERIFY($user->id);
        //     } catch (\Exception $e) {
        //         return response()->json(["status" => false, "message" => ["There were some error when sending email, please try again."]], 422);
        //     }
        //     return response()->json(["status" => false, "message" => ["This account is registered but not verified, please check your mailbox."]], 400);
        // }

        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        $token->save();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }

    public function verify(Request $request)
    {
        $user = Client::where("code", $request->code)->first();
        if (!$user) {
            return view('404');
        }
        if (!$user->email_verified_at) {
            Client::whereEmail($user->email)->update(["email_verified_at" => now()]);
            return view('mail.status', ["page" => "success", "method" => "verify"]);
        }
        return view('mail.status', ["page" => "error", "method" => "verify"]);
    }

    public function re_verify(Request $request)
    {
        $request->validate([
            'email' =>  "required|email|exists:clients",
        ]);
        $user = Client::whereEmail($request->email)->first();
        if ($user->email_verified_at) {
            return response()->json(["status" => false, "message" => ["Your account has been verified before."]], 400);
        }
        try {
            MailController::VERIFY($user->id);
        } catch (\Exception $e) {
            return response()->json(["status" => false, "message" => ["There were some error when sending email, please try again."]], 422);
        }
        return response()->json(["status" => true, "message" => ["We have sent an email to you, please check your mailbox."]], 200);
    }

    public function forgot_password(Request $request)
    {
        $user = Client::whereEmail($request->email)->first();

        $request->validate([
            'email' => "required|email|exists:clients",
        ]);

        do {
            $code = $this->generateKey();
            $check_code = Client::where("code", $code)->first();
        } while ($check_code);

        Client::whereEmail($request->email)->update(['code' => $code, "password" => bcrypt($code)]);

        try {
            MailController::RESET_PASSWORD($user->id);
        } catch (\Exception $e) {
            return response()->json(["status" => false, "message" => ["There was an error sending email, please try again."]], 422);
        }

        return response()->json(["status" => true, "message" => ["We have sent an email to you, please check your mailbox."]], 200);
    }

    public function change_password(Request $request)
    {
        $request->validate([
            'current_password' => "required",
            'password' => "required",
        ]);
        if (!Hash::check($request->current_password,  $request->user()->password)) {
            return response()->json(["status" => false, "message" => ["Current Password Invalid"]], 400);
        }
        $request->user()->update([
            "password" => bcrypt($request->password)
        ]);
        return response()->json(["status" => true, "message" => ["Password changed"]]);
    }

    public function getProfile(Request $request)
    {
        return $request->user();
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function index()
    {
        $clients = Client::orderBy('created_at', 'DESC')->paginate(10);

        return $clients;
    }

    public function updateProfile(Request $request)
    {
        $request->user()->update([
            'name' => $request->name,
            'birthday' => $request->birthday,
            'gender' => $request->gender,
            'address' => $request->address
        ]);

        return response()->json(["status" => true], 200);
    }

    public function update(Request $request, Client $Client)
    {
        $Client->update([
            'verify' => 'success'
        ]);

        return response()->json(["status" => true], 200);
    }

    public function destroy(Client $Client)
    {
        Verify::where("phone", $Client->phone)->delete();
        $Client->delete();
        return response()->json(["status" => true], 200);
    }

    public function getUserInfo(Request $request)
    {
        $phone = $request->route('phone');
        $pro = Client::where("phone", $phone)->first();

        $info = Verify::where("phone", $pro->phone)->first();
        $list = new \stdClass();
        $list->id = $pro->id;
        $list->phone = $pro->phone;
        $list->address = $pro->address;
        $list->birthday = $pro->birthday;
        $list->gender = $pro->gender;
        $list->name = $pro->name;
        $list->referral = $pro->referral;
        $list->verify = $pro->verify;
        $list->ip = $info->ip;
        $list->front_photo = $info->front_photo;
        $list->back_photo = $info->back_photo;
        $list->portrait_video = $info->portrait_video;

        return $list;
    }

    public function search(Request $request)
    {
        $query = $request->get('query');
        return Client::where('phone', 'like', "%{$query}%")->get();
    }
}
