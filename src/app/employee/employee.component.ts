import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Employee} from './employee.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

dataArr:any;
countryArr:any;
stateArr:any;
cityArr:any;
files:any;
imageDirectoryPath:any = 'http://127.0.0.1:8000/public/image/';
employee=new Employee();
selectedHobby:any=[];
hobbyArr= [
  {
    "key":"cricket",
    "value":"cricket"
    },
    {
      "key":"chess",
      "value":"chess"
    },
    {
    "key":"dance",
    "value":"dance"
    }
]
  constructor(
    private dataService:DataService
  ) {
  
   }

  ngOnInit() {
  this.getEmployeeData();
  this.getCountry();
  }

  getEmployeeData()
  {
this.dataService.getData().subscribe(res=>{
  this.dataArr=res;
})
  }

  insertData()
  {
    let formdata=new FormData();
    formdata.append("file",this.files,this.files.name);
    formdata.append("data",JSON.stringify(this.employee));
    this.employee.hobby=this.selectedHobby.toString();
   
   this.dataService.insertData(formdata).subscribe(res=>{
     this.getEmployeeData();
       })
  }
  deleteData(id)
  {
     this.dataService.deleteData(id).subscribe(res=>{
       this.getEmployeeData();
     })  }
     hobbyChange(event)
     {
       let index=this.selectedHobby.indexOf(event.target.value);
       if(index==-1){

     this.selectedHobby.push(event.target.value);  
       }
       else{
         this.selectedHobby.splice(index,1);
       }
    
    }

    getCountry()
    {
      this.dataService.getCountry().subscribe(res=>{
      this.countryArr=res;
      })
    }
    getState(event)
    {
    var obj={
      country_id: event.target.value
    }
    this.dataService.getState(obj).subscribe(res=>{
      this.stateArr=res;
    })
}

getCity(event)
{
var obj={
  state_id: event.target.value
}
this.dataService.getCity(obj).subscribe(res=>{
  this.cityArr=res;
})
}

imageUpload(event)
{

this.files=event.target.files[0];

}
}
