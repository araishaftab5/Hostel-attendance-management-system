<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    function getCountry()
    {
         $countryModel=new Country();
       $data=$countryModel->getCountry();
       return response()->json($data);
    }

    
}