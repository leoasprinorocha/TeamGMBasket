import { AutenticacaoModule } from './../autenticacao/autenticacao.module';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { MensagemComponent } from './../uteis/mensagem/mensagem.component';
import { UteisModule } from './../uteis/uteis.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroNovoClienteComponent } from './cadastro-novo-cliente/cadastro-novo-cliente.component';
import { MenuComponent } from './menu/menu.component';
import { NgxMaskModule } from 'ngx-mask';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HomeComponent,
    CadastroNovoClienteComponent,
    MenuComponent,
    LandingpageComponent,


  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    UteisModule,
    ReactiveFormsModule,
    CabecalhoModule,
    NgxMaskModule.forChild(),
    MatIconModule,
    MatMenuModule

  ],
  exports:[
    HomeComponent,
    CadastroNovoClienteComponent,
    MenuComponent,
    MensagemComponent

  ]
})
export class HomeModule { }
