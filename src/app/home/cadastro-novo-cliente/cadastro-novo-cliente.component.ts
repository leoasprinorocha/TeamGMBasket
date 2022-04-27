import { RegistroCliente } from './registro-cliente';
import { CadastroNovoClienteService } from './cadastro-novo-cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-novo-cliente',
  templateUrl: './cadastro-novo-cliente.component.html',
  styleUrls: ['./cadastro-novo-cliente.component.scss'],
})
export class CadastroNovoClienteComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  novoUsuario!: RegistroCliente;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: CadastroNovoClienteService
  ) {

  }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email:[''],
      password:[''],
      confirmPassword:[''],
      nome:[''],
      telefone:[''],
      endereco:['']
    });

  }

  cadastrar(){
    this.novoUsuario = this.novoUsuarioForm.getRawValue() as RegistroCliente;
    console.log(this.novoUsuario);
    this.novoUsuario.Cliente.nome = this.novoUsuario.nome;
    this.novoUsuario.Cliente.telefone = this.novoUsuario.telefone;
    this.novoUsuario.Cliente.endereco = this.novoUsuario.endereco;

    var jsonCode = JSON.stringify(this.novoUsuario);
    console.log(jsonCode);
    this.novoUsuarioService.cadastraNovoUsuario(this.novoUsuario).subscribe(() =>{
      alert('Usuário cadastrado com sucesso!');
    },
    (error) =>{
      console.log(error);
      alert('Houve um erro ao cadastrar');
    }
    );
  }
}
