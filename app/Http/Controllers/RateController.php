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
            'asset' => $request->asset,
            'fiat' => $request->fiat,
            'merchantCheck' => true,
            'page' => 1,
            'publisherType' => null,
            'rows' => 5,
            'tradeType' => $request->type,
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
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->post($param, $data);

        return $response;
    }

}
