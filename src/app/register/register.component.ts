import { Component, OnInit } from '@angular/core';
import {Register} from './register.model'
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register=new Register();
data:any;
message:any;
status:any;
confirmpassword:any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }
  submit(form)
  {
    this.dataService.registerUser(this.register).subscribe(res=>{

      this.data=res;
this.message=this.data.message;
this.status=this.data.status;
this.register=new Register();
    })
  }

}
