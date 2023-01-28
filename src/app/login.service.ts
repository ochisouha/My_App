import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  constructor(private http:HttpClient) { }
  public loginuser (user : User):Observable<any>{
    return this.http.post<any>("http://localhost:9000/api/login",user);
  }
}
