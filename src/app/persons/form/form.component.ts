import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../logginService.service';
import { Person } from '../../person.model';
import { PersonService } from '../../personService.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nameInput:string;
  surnameInput:string;
  index:number;
  modoEdicion:number;

  constructor(private logginService:LogginService,
              private personService:PersonService,
              private routerService:Router,
              private routeService:ActivatedRoute){}

  ngOnInit(): void  {
    this.index = this.routeService.snapshot.params['id'];
   this.modoEdicion = +this.routeService.snapshot.queryParams['modoEdicion']
    if(this.modoEdicion != null && this.modoEdicion === 1){
      let person : Person = this.personService.findPeople(this.index);
      if(person != null){
       //valores de formulario
       this.nameInput = person.nombre
       this.surnameInput = person.apellido
      }     
    }
  }


  onAddPerson(){
    if(this.nameInput != null && this.surnameInput != null){
    let person1:Person = new Person(this.nameInput,this.surnameInput)
    if(this.modoEdicion != null && this.modoEdicion == 1){
      this.personService.modifyPerson(this.index, person1)
    }else{
      this.personService.addPerson(person1)
    }
    this.logginService.sendConsoleMessage(`Persona agregada / modificada ${person1.toString()}`)
    this.routerService.navigate(['personas'])
  }else{
    //Si no tiene datos no hace nada(?)
    //this.personService.addPerson(person1)
    return;
    }
  }

    onDeletePerson(){
      if(this.index != null){
        this.personService.deletePeople(this.index)
      }
      this.routerService.navigate(['personas'])
    }

}

