import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PaginaInicialTecnicoComponent } from './components/paginainicial/paginainicial.component';
import { TecnicoRoutingModule } from './tecnico-routing.module';

@NgModule({
  declarations: [
    PaginaInicialTecnicoComponent,

  ],
  imports: [
    CommonModule,
    TecnicoRoutingModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    PaginaInicialTecnicoComponent,
  ]
})
export class TecnicoModule { }
