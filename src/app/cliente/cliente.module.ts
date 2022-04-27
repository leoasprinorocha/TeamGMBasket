import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { TelaPrincipalClienteComponent } from './tela-principal-cliente/tela-principal-cliente.component';



@NgModule({
  declarations: [
    TelaPrincipalClienteComponent,

  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,

  ],
  exports:[
    TelaPrincipalClienteComponent

  ]
})
export class ClienteModule { }
