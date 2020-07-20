<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    function register(Request $request)
    {
        $request['password']= Hash::make($request->password);
      
    
       $userModel=new User();
      
      $userData= $userModel->getUser($request->email);
if(count($userData)==0){
    $data= $userModel->addUser($request->all());
    $response['message']="User Registration Successful";
    $response['data']=$request->all();
    $response['status']=1;
}
   else{
    $response['status']=0;
    $response['message']="Email already exists";
   } 
return response()->json($response);
    }

    function login(Request $request){
        $userModel=new User();
        $email=$request->email;
        $password=$request->password;
        $userData= $userModel->login($email,$password);
        if($userData){
           
            $response['status']=1;
            $response['message']="Login Successful";
        }
        else{
            $response['status']=0;
            $response['message']="Incorrect Email or Password";
        }
        return response()->json($response);
       
        // $token= JWTAuth::fromUser($userData);
        // dd($token);
    }
}