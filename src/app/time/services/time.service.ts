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

  public idTime!: number;

  recuperaTodosTimes(): Observable<Time[]> {
    var urlQuery = `${AppComponent.apiUrl}Times/RecuperaTodosTimes`;
    return this.httpClient.get<Time[]>(
      urlQuery
    );
  }

  recuperaDetalhesTime(idTime: number): Observable<Time> {
    var urlQuery = `${AppComponent.apiUrl}Times/RecuperaDetalhesTime/${idTime}`;
    return this.httpClient.get<Time>(
      urlQuery
    );
  }



}
