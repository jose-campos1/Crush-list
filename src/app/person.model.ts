export class Person{

   

    constructor(public nombre:string, public apellido:string){}

    toString(){
        return `${this.nombre} ${this.apellido}`
    }

}