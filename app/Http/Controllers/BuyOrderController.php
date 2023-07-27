<?php

namespace App\Http\Controllers;

use App\Models\BuyOrder;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Http;

class BuyOrderController extends Controller
{
    public function generateKey()
    {
        $key = "";
        for ($x = 1; $x <= 6; $x++) {
            $key .= random_int(0, 6);
        }
        return $key;
    }

    public function index()
    {
        return BuyOrder::orderBy('created_at', 'DESC')->paginate(10);
    }

    public function addOrder(Request $request)
    {
        $rate = $this->getPrice($request->token, 'buy');

        if($request->token == 'btc'){
            $rate = $rate + 5000000;
        }
        if($request->token == 'eth'){
            $rate = $rate + 300000;
        }
        if($request->token == 'bnb'){
            $rate = $rate + 50000;
        }

        if (is_null($rate)) {
            return response()->json(["status" => false, "message" => ["Đã xảy ra lỗi, vui lòng thử lại"]], 400);
        }

        $data = new BuyOrder([
            'code' => $this->generateKey(),
            'status' => 1,
            'phone' => $request->phone,
            'token' => $request->token,
            'amount' => $request->amount,
            'money' => $rate * $request->amount + $request->fee,
            'fee' => $request->fee,
            'rate' => $rate,
            'network' => $request->network,
            'address' => $request->address
        ]);
        $data->save();

        return response()->json(["status" => true, "data" =>  $data], 201);
    }

    public function getOrder(Request $request)
    {
        return BuyOrder::where("phone", $request->user()->phone)->orderBy('created_at', 'DESC')->get();
    }

    public function show(Request $request)
    {
        return BuyOrder::where("code", $request->user()->phone)->get();
    }

    public function update(Request $request, BuyOrder $BuyOrder)
    {
        $BuyOrder->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function getPrice($asset, $type)
    {
        $param = 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search';
        
        $data = [
            'asset' => $asset,
            'fiat' => 'vnd',
            'merchantCheck' => true,
            'page' => 1,
            'publisherType' => null,
            'rows' => 5,
            'tradeType' => $type,
        ];

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->post($param, $data);

        return $response['data'][4]['adv']['price'];
    }

    public function search(Request $request)
    {
        $query = $request->get('query');
        return BuyOrder::where('code', 'like', "%{$query}%")->get();
    }
}
