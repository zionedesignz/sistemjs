export class Perro{
    //propiedades
    nombre:string;
    //metodo constructor
    constructor( valor:string ){
        this.nombre = valor;
        console.log(`Soy un perro llamado ${this.nombre}`);
    }
}

