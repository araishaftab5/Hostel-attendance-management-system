<?php

namespace App\Models;
use DB;
class State
{
    function getState($country_id)
    {
     $data= DB::table('state')->where('country_id',$country_id)->get();
  
     return $data;
    }
    
}