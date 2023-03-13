import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { LogginServiceAuth } from './logginService.Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private LogginService:LogginServiceAuth,
              private auth:Auth){}

onLogin(form:NgForm){
  console.log('Dentro de login ✔')
  const email = form.value.email
  const password = form.value.password
  this.LogginService.login(email,password);
   
 }
}

