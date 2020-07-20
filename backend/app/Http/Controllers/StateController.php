<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    function getState(Request $request)
    {
     $country_id=$request->country_id;
     
         $stateModel=new State();
       $data=$stateModel->getState($country_id);
       return response()->json($data);
      
    }

    
}