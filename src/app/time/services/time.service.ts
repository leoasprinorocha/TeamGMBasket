import { AppComponent } from './../../app.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from '../models/time';
import { CustomHttpResponse } from 'src/app/uteis/models/customHttpResponse';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private httpClient: HttpClient) { }


  recuperaTodosTimes(): Observable<Time[]> {
    var urlQuery = `${AppComponent.apiUrl}Times/RecuperaTodosTimes`;
    return this.httpClient.get<Time[]>(
      urlQuery
    );
  }

  adicionaTime(novoTime: Time): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(
      `${AppComponent.apiUrl}Usuarios/AdicionaUsuario`,
      novoTime
    );
  }

}
