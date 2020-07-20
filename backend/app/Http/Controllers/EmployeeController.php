<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    function getEmployee()
    {
         $employeeModel=new Employee();
       $data=$employeeModel->getEmployee();
       return response()->json($data);
    }

    function addEmployee(Request $request)
    {
       $file=$request->file('file');
       $uploadPath="public/image";
       $originalImage=$file->getClientOriginalName();
       $file->move($uploadPath,$originalImage);
       $employeeData=json_decode($request->data,true);

       $employeeData["image"]=$originalImage;
      $employeeModel=new Employee();
      $data=$employeeModel->addEmployee($employeeData);
      
    }
    function deleteEmployee(Request $request)
    {
       $id=$request->id;
      
     $employeeModel=new Employee();
    $employeeModel->deleteEmployee($id);
      
    }
    function updateEmployee(Request $request)
    {
       $id=$request->id;
      
      $employeeModel=new Employee();
     $employeeModel->updateEmployee($id,$request->all());
      
    }

    function getOneEmployee(Request $request)
    {
       $id=$request->id;
      
   $employeeModel=new Employee();
 $data= $employeeModel->getOneEmployee($id);
 return response()->json($data);
      
    }
}