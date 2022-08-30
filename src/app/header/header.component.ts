import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //title = 'Employee Management System';
  constructor(private authService : AuthService, private router : Router) { }
  username: any;
  rolename: any;

  ngOnInit(): void {
    this.username = sessionStorage.getItem('Username');

    if(sessionStorage.getItem('Access_Role') == '1'){
      this.rolename = "Administrator";
    }
    else if(sessionStorage.getItem('Access_Role') == '2'){
      this.rolename = "Manager";
    }
    else if(sessionStorage.getItem('Access_Role') == '3'){
      this.rolename = "Receptionist";
    }
  }

  goHome()
  {
    console.log("go home");
  }


  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }


}
