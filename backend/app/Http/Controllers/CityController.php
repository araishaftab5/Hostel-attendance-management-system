<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    function getCity(Request $request)
    {
     $state_id=$request->state_id;
     
         $cityModel=new City();
       $data=$cityModel->getCity($state_id);
       return response()->json($data);
      
    }

    
}