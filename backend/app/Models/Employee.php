<?php

namespace App\Models;
use DB;
class Employee
{
    function getEmployee()
    {
     $data= DB::table('employee')->get();
     return $data;
    }
    function addEmployee($data)
    {
        
      DB::table('employee')->insert($data);
    }
    function deleteEmployee($id)
    {
      DB::table('employee')->where('id',$id)->delete();
    }
    function updateEmployee($id,$data)
    {
      DB::table('employee')->where('id',$id)->update($data);
    }
    function getOneEmployee($id)
    {
      $data= DB::table('employee')->where('id',$id)->get()->first();
    return $data;
    }
}