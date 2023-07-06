<?php

namespace App\Http\Controllers;

use App\Models\SellOrder;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class SellOrderController extends Controller
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
        return SellOrder::orderBy('created_at', 'DESC')->paginate(10);
    }

    public function addOrder(Request $request)
    {
        $data = new SellOrder([
            'code' => $this->generateKey(),
            'status' => 1,
            'phone' => $request->phone,
            'token' => $request->token,
            'amount' => $request->amount,
            'money' => $request->money,
            'network' => $request->network,
            'bank_name' => $request->bank_name,
            'account_number' => $request->account_number,
            'owner_name' => $request->owner_name,
        ]);
        $data->save();

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

    public function destroy(SellOrder $SellOrder)
    {
        $SellOrder->delete();
        return response()->json(["status" => true], 200);
    }
}
