import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroNovoClienteComponent } from './cadastro-novo-cliente/cadastro-novo-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'cadastronovousuario',
    component: CadastroNovoClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
