import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroCliente } from './registro-cliente';

@Injectable({
  providedIn: 'root',
})
export class CadastroNovoClienteService {
  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: RegistroCliente) {

    return this.httpClient.post(
      'http://192.168.0.2:46000/authentication/register',
      novoUsuario
    );
  }
}
