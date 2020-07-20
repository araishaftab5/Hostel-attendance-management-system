<?php

namespace App\Models;
use DB;
class City
{
    function getCity($state_id)
    {
     $data= DB::table('city')->where('state_id',$state_id)->get();
  
     return $data;
    }
    
}