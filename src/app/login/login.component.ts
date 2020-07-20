import { Component, OnInit } from '@angular/core';
import {LoginModel} from './login.model';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login= new LoginModel();
data:any;
status:any;
message:any;
  constructor(
    private dataService: DataService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  submit()
  {
    this.dataService.login(this.login).subscribe((res:any)=>{
         this.data= res;
         this.status=res.status;
         if(this.status==1)
         {
this.route.navigate(['/']);
         }
         else{
           this.message=res.message;
         }
    })
    
  }

}
