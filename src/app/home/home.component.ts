import { AutenticacaoService } from './../autenticacao/autenticacao.service';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

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

  constructor(private authService: AutenticacaoService) {
    this.invalidLogin = true;
  }

  async login(form: NgForm) {
    this.UserData = await this.authService.autenticar(this.email, this.password);

        const token = this.UserData.token.AccessToken;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;



  }

  ngOnInit(): void {}

  logOut() {
    localStorage.removeItem('jwt');
  }
}
