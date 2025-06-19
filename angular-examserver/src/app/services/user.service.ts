import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

// let baseUrl= 'http://localhost:8081';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

// add user

// console.log(user);

public addUser(user:any){
  console.log(user);
return this.http.post(`${baseUrl}/user/`, user);
}





}
