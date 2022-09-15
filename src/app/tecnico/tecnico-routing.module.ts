import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialTecnicoComponent } from './components/paginainicial/paginainicial.component';


const routes: Routes = [
  {
    path: 'paginainicialtecnicos',
    component: PaginaInicialTecnicoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoRoutingModule {}
