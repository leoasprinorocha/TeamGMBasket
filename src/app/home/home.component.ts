import { Component, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './CSS/home.component.css'
  ],
})
export class HomeComponent {
  invalidLogin: boolean;
  constructor(private http: HttpClient) {
    this.invalidLogin = true;
  }

  login(form: NgForm){
    const credentials = {
      'Email': form.value.Email,
      'Password': form.value.Password
    }

    this.http.post("http://localhost:31964/api/authentication/login", credentials)
    .subscribe(response => {

      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;


    },
    err => {
      this.invalidLogin = true
    }

    );
  }

  logOut(){
    localStorage.removeItem("jwt");
  }
}
