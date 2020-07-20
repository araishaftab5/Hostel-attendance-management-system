<?php

namespace App\Models;
use DB;
class Country
{
    function getCountry()
    {
     $data= DB::table('country')->get();
     return $data;
    }
    
}