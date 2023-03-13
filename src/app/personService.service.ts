import { Person } from "./person.model";
import { LogginService } from "./logginService.service";
import { Injectable } from '@angular/core'
import { DataServices } from "./data.services";



@Injectable()
export class PersonService{
  persons:Person [] = [];

  constructor(private logginService:LogginService,
            private dataService:DataServices)
        {}

    //Lo utilizamos para inicializar el arreglo ya que es asincrono de la BD
    //Se inicializa desde el componente personas component


    setPersons(persons : Person []){
        this.persons = persons;
      }

    obtainPeople(){
        return this.dataService.loadPeople();
    }

    addPerson(person:Person){
        this.logginService.sendConsoleMessage(`Adding persons ${person.toString()}`);
        if(this.persons == null){
          this.persons = []
        }
        this.persons.push(person)
        this.dataService.savePersons(this.persons)
         //Si se guarda solo un elemento se debe trabajar cada indice y regenerarlos con cada modificacion
        //this.dataService.guardarPersona(persona, this.personas.length);
    }

  findPeople(index:number){
    let person : Person = this.persons [index];
    this.logginService.sendConsoleMessage(`persona encontrada ${person.toString()}`);
    return person;
  }

  modifyPerson(index:number, person:Person){
    this.logginService.sendConsoleMessage("persona a modificar:" + person.toString() + " con indice:" + index);
    let person1 = this.persons[index];
    person1.nombre = person.nombre;
    person1.apellido = person.apellido;
    this.dataService.modifyPerson(index, person);

}
  
  modifyPersons(){
    this.logginService.sendConsoleMessage("modificar todas las personas:");
    if(this.persons != null)
        //Guarda todas las personas nuevamente para regenerar indicess
        this.dataService.savePersons(this.persons);
      }
   
  deletePeople(index:number){
    this.logginService.sendConsoleMessage("eliminar persona con indice: " + index); 
    this.persons.splice(index,1);
    this.dataService.deletePeople(index);
    //Se vuelven a guardar todas las personas para que coincida el indice con el arreglo en memoria
    this.modifyPersons();
  }
  
}