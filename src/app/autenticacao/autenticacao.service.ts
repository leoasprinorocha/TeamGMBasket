import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar(email:string, password:string): Observable<any>{
    const credentials = {
      'Email': email,
      'Password': password
    }
    return this.httpClient.post("http://192.168.100.19:46000/authentication/login",credentials);

  }
}
