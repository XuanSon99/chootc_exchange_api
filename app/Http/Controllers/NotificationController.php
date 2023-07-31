<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\Log;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function getNotification(Request $request)
    {
        return Notification::where("phone", $request->user()->phone)->orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $data = new Notification([
            'phone' => $request->phone,
            'content' => $request->content,
            'color' => $request->color,
            'url' => $request->url,
            'is_readed' => 0
        ]);
        $data->save();

        return response()->json(["status" => true], 201);
    }

    public function readNotification(Request $request)
    {
        Notification::where('id', $request->id)->update(['is_readed' => 1]);
        
        return response()->json(["status" => true], 200);
    }

    public function readAll(Request $request)
    {
        $list = Notification::where(["phone" => $request->user()->phone, "is_readed" => 0])->get();

        $ids = [];
        foreach ($list as $item) {
            array_push($ids, $item->id);
        }
        Notification::whereIn('id', $ids)->update(['is_readed' => 1]);
        
        return response()->json(["status" => true], 200);
    }

    public function countNotification(Request $request)
    {
        return Notification::where(["phone" => $request->user()->phone, "is_readed" => 0])->count();
    }

    public function destroy(Notification $Notification)
    {
        $Notification->delete();
        return response()->json(["status" => true], 200);
    }

    public function update(Request $request, Notification $Notification)
    {
        $Notification->update($request->all());

        return response()->json(["status" => true], 200);
    }

    public function index()
    {
        return Notification::orderBy('created_at', 'DESC')->paginate(10);
    }
}