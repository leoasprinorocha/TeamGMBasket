import { UteisModule } from './../uteis/uteis.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroNovoClienteComponent } from './cadastro-novo-cliente/cadastro-novo-cliente.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    CadastroNovoClienteComponent,
    MenuComponent,

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
    CadastroNovoClienteComponent,
    MenuComponent
  ]
})
export class HomeModule { }
