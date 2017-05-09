/**
 * Created by USRDEL on 5/3/17.
 */
console.log('hola');
var harold= {

    nombre: 'Harold',
    apellido: 'Flores',
    fechaNacimiento: new Date(),
    imprimir: function (){
    console.log(this.nombre, this.apellido);
},
    anio:function(){
        return this.fechaNacimiento.getFullYear()
    },
    diferenciaEdad: function (edadAComparar) {
        return Math.abs(this.anio() - edadAComparar)

    }
}
harold.imprimir();
console.log(harold.imprimir())
console.log(harold.anio());
console.log(harold.diferenciaEdad(2013));