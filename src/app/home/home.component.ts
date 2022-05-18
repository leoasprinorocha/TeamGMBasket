import { MatDialog } from '@angular/material/dialog';
import { AutenticacaoService } from './../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./CSS/home.component.css'],
})
export class HomeComponent implements OnInit {
  invalidLogin: boolean;
  email = '';
  password = '';
  UserData: any;

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private dialogRef: MatDialog
  ) {
    this.invalidLogin = true;
  }

  login(form: NgForm) {
    this.UserData = this.authService
      .autenticar(this.email, this.password)
      .subscribe(
        () => {
          this.router.navigate(['clientelogado']);
        },
        (error) => {
          alert('Usuário ou senha inválida!');
        }
      );
  }

  ngOnInit(): void {}

  logOut() {
    localStorage.removeItem('jwt');
  }
}
