import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService} from '../services/data.service';
import { Employee } from '../employee/employee.model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
countryArr:any;
stateArr:any;
cityArr:any;
  id:any;
employee=new Employee();
data:any;
a:any;
selectedHobby:any = [];
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
    private route:ActivatedRoute,
    private dataservice:DataService
  ) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params.id;
this.getData();
this.getCountry();
  }

  getData()
  {
this.dataservice.getOneEmployee(this.id).subscribe(res=>{
 this.data=res;
  this.employee=this.data;
if(this.employee.country){
  this.getState(this.employee.country);
}
if(this.employee.state){
  this.getCity(this.employee.state);
}
  this.selectedHobby=this.employee.hobby.split(",");
  
})
  }

  updateData()
  {
    this.employee.hobby=this.selectedHobby.toString();
    this.dataservice.updateData(this.id,this.employee).subscribe(res=>{

    })
  }
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
   this.dataservice.getCountry().subscribe(res=>{
   this.countryArr=res;
   })
 }
 getState(event)
 {
 var obj={
   country_id: event
 }
 this.dataservice.getState(obj).subscribe(res=>{
   this.stateArr=res;
 })
}

getCity(event)
{
var obj={
state_id: event
}
this.dataservice.getCity(obj).subscribe(res=>{
this.cityArr=res;
})
}


}
