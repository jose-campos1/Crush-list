import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable()
export class LogginServiceAuth {
  constructor(private auth: Auth, private router: Router) {}

  token: any;

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then((response) => {
      this.auth.currentUser?.getIdToken().then((token) => {
        this.token = token;
        this.router.navigate(['/']);
      });
    });
  }

  getIdToken() {
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logOut(){
    console.log('LogOut 👋');
    this.auth.signOut().then(() => {
      this.token = null;
      console.log('dentro de logout')
      this.router.navigate(['/login'])
    }).catch(err => console.log('Error de logout' + err))
  }
}
