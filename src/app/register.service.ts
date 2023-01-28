import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class registerservice {

  constructor(private http:HttpClient) { }

  public loginuser (user : User):Observable<any>{
    return this.http.post<any>("http://localhost:9000/api/login",user);
  }

  public registeruser (user : User):Observable<any>{
    return this.http.post<any>("http://localhost:9000/api/register",user).pipe(catchError(this.handleError))
    
  }

handleError(error:Response) {

  return throwError(error);

}

}
