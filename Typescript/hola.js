var holaMundo = "que tal mundo cruel";
console.log(holaMundo);
var soltero = true; // false
var decimal = 6;
var nombres = "Harold";
var notas = [1, 2, 3, 4];
var jaladas = [1, 2, 3];
var nombre = "asd";
//nombre= 12;
var usuario = {
    nombre: "harold",
    apellido: "flores",
    direccion: "mitad del mundo"
};
var persona = (function () {
    function persona(nombre, apellido, fechaNacimiento) {
        this.nombre = "usu";
        this.apellido = "flores";
        /*   this.nombre=nombre;
           this.apellido=apellido;
           this.fechaNacimiento= fechaNacimiento;*/ 
    }
    persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido);
        this.imprimirNombre("leslie", "arias");
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
    };
    return persona;
}());
var harold = new persona();
//harold.nombre="Harold";
//console.log(harold.nombre);
harold.imprimirPersona();
