import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginainicialComponent } from './components/paginainicial/paginainicial/paginainicial.component';
import { TimeRoutingModule } from './time-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { DetalhesComponent } from './components/detalhes/detalhes/detalhes.component';




@NgModule({
  declarations: [
    PaginainicialComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    TimeRoutingModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    PaginainicialComponent,
    DetalhesComponent
  ]
})
export class TimeModule { }
