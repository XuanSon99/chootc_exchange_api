<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use stdClass;
use Drnxloc\LaravelHtmlDom\HtmlDomParser;

class RateController extends Controller
{
    public function getPrice(Request $request)
    {
        $param = 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search';
        
        $data = [
            'asset' => 'USDT',
            'fiat' => 'VND',
            'page' => 1,
            'publisherType' => null,
            'rows' => 20,
            'tradeType' => 'BUY',
        ];

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->post($param, $data);

        return $response;
    }

    public function getBankInfo(Request $request)
    {
        $param = 'https://api.vietqr.io/v2/lookup';
        
        $data = [
            'bin' => $request->bin,
            'accountNumber' => $request->account_number
        ];

        $response = Http::withHeaders([
            'x-client-id' => '2de54bd8-8cfe-4a6f-b74b-1d0a4a016a5a', 
            'x-api-key' => 'a06229fc-1bfa-4e47-b30e-d242354b97cb',
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->post($param, $data);

        return $response;
    }

}
