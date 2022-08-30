import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router : Router){

  }

  //admin/rceptionist/manager   ---roles
  //check role id
  //routes roleId and sessionRole == true

  canActivate(
    route: ActivatedRouteSnapshot): boolean{
      //check role: current role Vs exceptedRole

      //expectedRole : from url
      const expectedRole = route.data.roleId;

      //currentRole : session storage
      const currentRole = sessionStorage.getItem("Access_Role");

      if(currentRole !== expectedRole){
        this.router.navigateByUrl('login');
        return false;
      }
      return true;

    }
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
  
  
}
