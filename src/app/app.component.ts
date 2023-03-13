import { Component, OnInit } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { LogginServiceAuth } from './login/logginService.Auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Persons 😀';

  constructor(private loginService:LogginServiceAuth){}

  ngOnInit(): void {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyCPvfDAATdztklN74IzK6zoEwNVsx2nCXA',
      authDomain: 'data-base1-8cf55.firebaseapp.com',
      databaseURL: 'https://data-base1-8cf55-default-rtdb.firebaseio.com',
      projectId: 'data-base1-8cf55',
      storageBucket: 'data-base1-8cf55.appspot.com',
      messagingSenderId: '512917128961',
      appId: '1:512917128961:web:ca6827d6ff09e761e27d00',
      measurementId: 'G-CPTPS9NH5D',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }

  isAuthenticated(){
  return this.loginService.isAuthenticated()
  }

  goOut() {
     this.loginService.logOut()
  }
}
