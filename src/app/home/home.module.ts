import { UteisModule } from './../uteis/uteis.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroNovoClienteComponent } from './cadastro-novo-cliente/cadastro-novo-cliente.component';


@NgModule({
  declarations: [
    HomeComponent,
    CadastroNovoClienteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    UteisModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    CadastroNovoClienteComponent
  ]
})
export class HomeModule { }
