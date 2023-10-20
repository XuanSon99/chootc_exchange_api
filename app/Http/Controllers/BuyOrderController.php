<?php

namespace App\Http\Controllers;

use App\Models\BuyOrder;
use App\Models\SellOrder;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use App\Models\Client;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class BuyOrderController extends Controller
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
        $query = BuyOrder::orderBy('created_at', 'DESC');

        if ($request->has('status'))
            $query->where('status', '=', $request->get('status'));

        if ($request->has('from') && $request->has('to'))
            if ($request->get('from') == $request->get('to'))
                $query->whereDate('created_at', Carbon::today());
            else
                $query->whereBetween('created_at', [$request->get('from'), $request->get('to')]);

        $perPage = 10;
        if ($request->has('perPage'))
            $perPage = $request->get('perPage');

        return $query->paginate($perPage);
    }

    public function addOrder(Request $request)
    {
        if ($request->amount > 110) {
            $user = Client::where("phone", $request->phone)->first();
            if (!$user || $user->verify != 'success') {
                return;
            }
        }

        $rate = $this->getPrice($request->token, 'buy');

        if (is_null($rate)) {
            return response()->json(["status" => false, "message" => ["Đã xảy ra lỗi, vui lòng thử lại"]], 400);
        }

        $data = new BuyOrder([
            'code' => $this->generateKey(),
            'status' => 3,
            'phone' => $request->phone,
            'token' => $request->token,
            'amount' => $request->amount,
            'money' => $rate * $request->amount + $request->fee * $rate,
            'fee' => $request->fee * $rate,
            'rate' => $rate,
            'network' => $request->network,
            'address' => $request->address
        ]);
        $data->save();

        $chat_id = "-987421757";
        $text = "🟢 Mua " . $request->amount . " " . $request->token;
        $this->sendMessage($chat_id, $text);

        return response()->json(["status" => true, "data" =>  $data], 201);
    }

    public function getOrder(Request $request)
    {
        return BuyOrder::where("phone", $request->user()->phone)->orderBy('created_at', 'DESC')->get();
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

    public function show(BuyOrder $BuyOrder)
    {
        return $BuyOrder;
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

    public function getOrderOfMember(Request $request)
    {
        $members = Client::where('referral', $request->user()->phone)->get();

        $data = [];

        foreach ($members as $mem) {
            $buy_list = BuyOrder::where('phone', $mem->phone)->where('status', 1);
            $sell_list = SellOrder::where('phone', $mem->phone)->where('status', 1);

            if ($request->has('from') && $request->has('to'))
                if ($request->get('from') == $request->get('to')) {
                    $buy_list->whereDate('created_at', $request->get('from'));
                    $sell_list->whereDate('created_at', $request->get('from'));
                } else {
                    $buy_list->whereBetween('created_at', [$request->get('from'), $request->get('to')]);
                    $sell_list->whereBetween('created_at', [$request->get('from'), $request->get('to')]);
                }

            $data = array_merge($data, $buy_list->get()->toArray());
            $data = array_merge($data, $sell_list->get()->toArray());
        }

        $perPage = 10;
        if ($request->has('perPage'))
            $perPage = $request->get('perPage');

        $data = collect($data)->sortByDesc('created_at')->values();

        return  $this->paginate($data, $perPage);
    }

    public function paginate($items, $perPage, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}
