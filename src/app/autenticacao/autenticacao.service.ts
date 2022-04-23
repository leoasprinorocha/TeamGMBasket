import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  async autenticar(email:string, password:string){
    const credentials = {
      'Email': email,
      'Password': password
    }
    return await this.httpClient.post("http://192.168.100.19:46000/authentication/login",credentials).toPromise();

  }
}
