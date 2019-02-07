export class Gato{
    //propiedades
    nombre:string;
    //metodo constructor
    constructor( valor:string ){
        this.nombre = valor;
        console.log(`Soy un gato llamado ${this.nombre}`);
    }
}

