import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  public loginVerify(user: User)
  {
    //calling the web api for checking username and password
    return this.httpClient.get<User>(environment.apiUrl + '/api/tblusers/' + user.UserName + '/' + user.UserPassword)
  }

  //function for logout
  public logout(){
    sessionStorage.removeItem('Username');
    sessionStorage.removeItem('Access_Role');
  }
}
