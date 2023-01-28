import { Injectable } from '@angular/core';
import { Provider } from './provider';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http:HttpClient) { }
  public Provideruser (provider : Provider):Observable<any>{
    return this.http.post<any>("http://localhost:9000/api/provider",provider);
  }
}
