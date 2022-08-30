import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router) { }
  //declare variables
  loginForm: FormGroup;
  isSubmitted = false;
  error: string;


  ngOnInit(): void {
    //create a reactive form model
    this.loginForm = this.formBuilder.group({
      //FormControl name fields
      UserName: ['', [Validators.required]],
      UserPassword: ['', [Validators.required]]
    });
  }

  ///GET all controls for validation
  get formControls() {
    return this.loginForm.controls;
  }

  loginCredentials() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    console.log("Submitted form for credentials");
    //form is invalid
    if (this.loginForm.invalid) {
      this.error = "Sorry! Invalid credential and Try again";
    }

    if (this.loginForm.valid) {
      console.log("Submitted with valid");

      //calling method from AuthService -- Authentication and Authorize
      this.authService.loginVerify(this.loginForm.value).subscribe(
        response => {
          this.error = '';
          console.log(response);

          //set sessionstorage and localstorage - changes browser to browser
          sessionStorage.setItem('Username',response.UserName);
          sessionStorage.setItem('Access_Role',response.UserTypeId.toString());
          //Local Storage - same for all browsers
          localStorage.setItem('Username',response.UserName);
          localStorage.setItem('Access_Role',response.UserTypeId.toString());


          if (response == null) {
            this.error = "Invalid username and password";
          }
          else if (response.UserTypeId == 1) {
            this.router.navigateByUrl('emplist');
            console.log('Administrator');
          }
          else if (response.UserTypeId == 2) {
            this.router.navigateByUrl('emplist');
            console.log('Sales Manager');
          }
          else{
            this.error="Sorry! You are not allowed to accessible system";
          }
        },
        error =>{
          console.log(error);
          this.error = "Invalid Username or Password! Please try again";
        }
      )
    }
  }
}


