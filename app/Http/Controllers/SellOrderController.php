<?php

namespace App\Http\Controllers;

use App\Models\SellOrder;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class SellOrderController extends Controller
{
    public function generateKey()
    {
        $key = "";
        for ($x = 1; $x <= 8; $x++) {
            $key .= random_int(0, 9);
        }
        return $key;
    }

    public function index(Request $request)
    {
        $query = SellOrder::orderBy('created_at', 'DESC');

        if ($request->has('status'))
            $query->where('status', '=', $request->get('status'));

        if ($request->has('from') && $request->has('to'))
            if ($request->get('from') == $request->get('to'))
                $query->whereDate('created_at', '=', $request->get('from'));
            else
                $query->whereBetween('created_at', [$request->get('from'), $request->get('to')]);

        $perPage = 10;
        if ($request->has('perPage'))
            $perPage = $request->get('perPage');

        return $query->paginate($perPage);
    }

    public function addOrder(Request $request)
    {

        $rate = $this->getPrice($request->token, 'sell');
        $rate_fee = $rate;

        if ($request->token != 'usdt') {
            $rate_fee = $this->getPrice('usdt', 'sell');
        }

        if (is_null($rate)) {
            return response()->json(["status" => false, "message" => ["Đã xảy ra lỗi, vui lòng thử lại"]], 400);
        }

        if ($request->amount < 5000) {
            $rate = $rate - 100;
            $rate_fee = $rate_fee - 100;
        }

        $data = new SellOrder([
            'code' => $this->generateKey(),
            'status' => 3,
            'phone' => $request->phone,
            'token' => $request->token,
            'amount' => $request->amount,
            'money' => $rate * $request->amount - $request->fee * $rate_fee,
            'fee' => $request->fee * $rate_fee,
            'rate' => $rate,
            'network' => $request->network,
            'bank_name' => $request->bank_name,
            'account_number' => $request->account_number,
            'owner_name' => $request->owner_name,
        ]);
        $data->save();

        // $chat_id = "-987421757";
        $chat_id = "-4221804578";

        $text = "🔴 Bán " . $request->amount . " " . $request->token;
        $this->sendMessage($chat_id, $text);

        return response()->json(["status" => true, "data" =>  $data], 201);
    }

    public function getOrder(Request $request)
    {
        return SellOrder::where("phone", $request->user()->phone)->orderBy('created_at', 'DESC')->get();
    }

    public function update(Request $request, SellOrder $SellOrder)
    {
        $SellOrder->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function getPrice($asset, $type)
    {
        $param = 'https://c2c.binance.com/bapi/c2c/v2/friendly/c2c/adv/search';

        $data = [
            'asset' => $asset,
            'fiat' => 'vnd',
            'merchantCheck' => true,
            'page' => 1,
            'publisherType' => null,
            'rows' => 20,
            'tradeType' => $type,
        ];

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->post($param, $data);

        return $response['data'][19]['adv']['price'];
    }

    public function search(Request $request)
    {
        $query = $request->get('query');
        return SellOrder::where('code', 'like', "%{$query}%")->get();
    }

    public function show(SellOrder $SellOrder)
    {
        return $SellOrder;
    }

    public function sendMessage($chat_id, $text)
    {
        $token = "6489797255:AAHCIyODtzVahB8bTEgM_v7MKvMcCsSEL6k";

        $params = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chat_id . "&text=" . $text . "&parse_mode=html";

        Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($params);
    }

    public function updateAddress(Request $request)
    {
        $order = SellOrder::where('code', $request->code)->first();

        if (!$order->customer_address) {
            SellOrder::where('code', $request->code)->update(['customer_address' => $request->customer_address]);
            return response()->json(["status" => true], 200);
        }
    }
}
