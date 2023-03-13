import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogginServiceAuth } from '../login/logginService.Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private logginService:LogginServiceAuth,
              private router: Router){}

  onRegister(form:NgForm){
    console.log("On-Register ✍")
    const email = form.value.email
    const password = form.value.password
    this.logginService.register(email,password).then(response => console.log(response))
    .catch(err => console.log('Error' + err))
   }

  toLogin(){
    this.router.navigate(['/login'])
  }

}
