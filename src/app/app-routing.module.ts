import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EditComponent} from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path:'',
  component:EmployeeComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
path: 'login',
component:LoginComponent
},
{
  path:'edit/:id',
  component:EditComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
