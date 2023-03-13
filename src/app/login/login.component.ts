import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogginServiceAuth } from './logginService.Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private LogginService:LogginServiceAuth,
              private router: Router)
              {}

onLogin(form:NgForm){
  console.log('Dentro de login ✔')
  const email = form.value.email
  const password = form.value.password
  this.LogginService.login(email,password);
   
 }

 toRegister(){
  this.router.navigate(['/register'])
 }

}




