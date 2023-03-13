import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../personService.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})


export class PersonsComponent implements OnInit {

  persons:Person [] = [];

constructor(private personsService:PersonService,
            private routerService:Router){
}


  ngOnInit(): void {
    
  
  this.personsService.obtainPeople()
  .subscribe(
    (persons : any) => {
      //Cargamos los datos de la base de datos al arreglo local.
      this.persons = persons;
      this.personsService.setPersons(this.persons);
      console.log(`Obtain persons suscriber ${this.persons}`)
    }
  );
  
        
      }

      irAgregar(){
        console.log("nos vamos a agregar ");
        this.routerService.navigate(['./personas/agregar'],{queryParams:{modoEdicion:0}});
      }

      


}
