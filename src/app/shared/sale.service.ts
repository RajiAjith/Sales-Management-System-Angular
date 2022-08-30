import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sale } from './sale';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private httpClient: HttpClient) { }

  employees: Sale[];
  formData: Sale = new Sale();
  

  //for binding employee list
  // BindListEmployee() {
  //   this.httpClient.get(environment.apiUrl + "/api/tblemployees/vmgetemployees").toPromise().then(response =>
  //     this.employees = response as Sale[]);
  // }
  // insertEmployee(emp: Sale): Observable<any> {
  //   return this.httpClient.post(environment.apiUrl + "/api/tblemployees", emp);
  // }

  // updateEmployee(emp: Sale): Observable<any> {
  //   return this.httpClient.put(environment.apiUrl + "/api/tblemployees", emp);
  // }

  // BindDepartments() {
  //   this.httpClient.get(environment.apiUrl + "/api/tblemployees/getdept").toPromise().then(response =>
  //     this.departments = response as Department[]);
  // }

  // DeleteEmployee(id: number) {
  //   return this.httpClient.delete(environment.apiUrl + "/api/tblemployees/"+ id);
  // }

  // GetEmployeeById(uId: number): Observable<any>{
  //   return this.httpClient.get(environment.apiUrl + "/api/tblemployees/"+ uId);
  // }


}




