import { DetalhesComponent } from './components/detalhes/detalhes/detalhes.component';
import { PaginainicialComponent } from './components/paginainicial/paginainicial/paginainicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'paginainicialtimes',
    component: PaginainicialComponent,
  },
{
  path: 'detalhestime',
  component: DetalhesComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeRoutingModule {}
