"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Perro = /** @class */ (function () {
    //metodo constructor
    function Perro(valor) {
        this.nombre = valor;
        console.log("Soy un perro llamado " + this.nombre);
    }
    return Perro;
}());
exports.Perro = Perro;
