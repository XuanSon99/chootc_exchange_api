<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class OrderController extends Controller
{
    public function index()
    {
        return Order::orderBy('created_at', 'DESC')->paginate(10);
    }

    public function addOrder(Request $request)
    {
        $data = new Order([
            'phone' => $request->phone,
            'token' => $request->token,
            'amount' => $request->amount,
            'money' => $request->money,
            'network' => $request->network,
            'address' => $request->address
        ]);
        $data->save();

        return response()->json(["status" => true, "data" =>  $data], 201);
    }

    public function getOrder(Request $request)
    {
        return Order::where("phone", $request->user()->phone)->orderBy('created_at', 'DESC')->get();
    }

    public function update(Request $request, Order $Order)
    {
        $Order->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Order $Order)
    {
        $Order->delete();
        return response()->json(["status" => true], 200);
    }
}
