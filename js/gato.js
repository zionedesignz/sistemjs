"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gato = /** @class */ (function () {
    //metodo constructor
    function Gato(valor) {
        this.nombre = valor;
        console.log("Soy un gato llamado " + this.nombre);
    }
    return Gato;
}());
exports.Gato = Gato;
