<?php
namespace App\Models;
use DB;
use Illuminate\Support\Facades\Hash;
class User{

    function addUser($data)
    {
       
            DB::table('users')->insert($data);
    }

    function getUser($email)
    {
        $data=DB::table('users')->where('email',$email)->get();
        return $data;
    }

    function login($email,$password) {
        
        $data=DB::table('users')->where('email',$email)->get()->first();
       
  if(Hash::check($password, $data->password)){
      return $data;
  }
    } 
}