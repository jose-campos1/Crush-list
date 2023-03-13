import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Person } from './person.model';
import { LogginServiceAuth } from './login/logginService.Auth';

@Injectable()
export class DataServices{
constructor(private httpClient:HttpClient,
            private logginAuth:LogginServiceAuth){}

loadPeople(){
    const token = this.logginAuth.getIdToken()
    return this.httpClient.get('https://data-base1-8cf55-default-rtdb.firebaseio.com/data.json?auth=' + token)
}

//Guardar Personas
savePersons(persons:Person[]){
    const token = this.logginAuth.getIdToken()
        this.httpClient.put('https://data-base1-8cf55-default-rtdb.firebaseio.com/data.json?auth=' + token, persons)
        .subscribe(
            (reponse) => {console.log('resultado de guardar persona' + reponse);
    },
    (error) => 
     console.log(`Error en guardar personas ${error}`));
    }

modifyPerson(index:number, person: Person){
    const token = this.logginAuth.getIdToken()
    let url: string;
    url = 'https://data-base1-8cf55-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    console.log("url de modificarPersona:" + url);
    this.httpClient.put( url, person)
        .subscribe(
            (response) => {
                console.log("resultado modificar Persona: " + response);
            },
            (error) => console.log("Error en modificar Persona: " + error)
        );
}

deletePeople(index:number){
    const token = this.logginAuth.getIdToken()
    let url: string;
    url = 'https://data-base1-8cf55-default-rtdb.firebaseio.com/datos/' + (index) + '.json?auth=' + token;
    console.log("url de eliminarPersona:" + url);
    this.httpClient.delete( url)
        .subscribe(  (response) => {
            console.log("resultado eliminar Persona: " + response);
        },
        (error) => console.log("Error en eliminar Persona: " + error));
}

/*subscribe(next?: ((value: Object) => void) | null | undefined, error?: ((error: any) => void) | null | undefined, complete?: (() => void) | null | undefined): Subscription */


}


