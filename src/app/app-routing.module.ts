import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './sales/addemployee/addemployee.component';
import { EditemployeeComponent } from './sales/editemployee/editemployee.component';
import { ListemployeeComponent } from './sales/listemployee/listemployee.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'emplist', component:ListemployeeComponent },
  {path:'addemp',component:AddemployeeComponent},
  { path: 'editemployee/:uId', component:EditemployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
