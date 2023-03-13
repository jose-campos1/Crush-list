import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogginGuardService } from './login/loginGuardService.service';
import { FormComponent } from './persons/form/form.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  {path: '' , component: PersonsComponent, canActivate: [LogginGuardService] },
  {path: 'personas', component: PersonsComponent, canActivate:[LogginGuardService] ,children: [
  {path: 'agregar', component: FormComponent},
  {path: ':id', component: FormComponent }
  ]},
  {path: 'login',component: LoginComponent},
  {path: '**' , component: ErrorComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
