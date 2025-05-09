<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
        $schedule->call(function () {
            DB::table('assets')->where('symbol','=','usdt')->update([
                'buy_rate' => $this->getPrice('usdt','buy'),
                'sell_rate' => $this->getPrice('usdt','sell'),
                "updated_at" => now()
            ]);
        })->cron('*/3 * * * *');

        $schedule->call(function () {
            DB::table('assets')->where('symbol','=','eth')->update([
                'buy_rate' => $this->getPrice('eth','buy'),
                'sell_rate' => $this->getPrice('eth','sell'),
                "updated_at" => now(),
            ]);
            DB::table('assets')->where('symbol','=','btc')->update([
                'buy_rate' => $this->getPrice('btc','buy'),
                'sell_rate' => $this->getPrice('btc','sell'),
                "updated_at" => now()
            ]);
        })->cron('*/10 * * * *');

        $schedule->call(function () {
            // DB::table('assets')->where('symbol','=','busd')->update([
            //     'buy_rate' => $this->getPrice('busd','buy'),
            //     'sell_rate' => $this->getPrice('busd','sell'),
            //     "updated_at" => now()
            // ]);
            DB::table('assets')->where('symbol','=','bnb')->update([
                'buy_rate' => $this->getPrice('bnb','buy'),
                'sell_rate' => $this->getPrice('bnb','sell'),
                "updated_at" => now()
            ]);
        })->cron('30 * * * *');
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

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
