/**
 * Created by USRDEL on 5/3/17.
 */
// carpeta variables
  // enteros
var dos=2
var tres= 3
var quince= 15;

console.log(dos);
console.log(tres);
console.log(quince);
// float
var dosPuntoCinco= 2.5
console.log(dosPuntoCinco);

// todas las demas

var verdaderoOFalso= true;
var falso = false;
var nombre= 'harold'
var negativo = -4
var fechaNacimiento= new Date();
var cuatroString = '4'
cuatroString= 4
cuatroString= true
cuatroString= false
cuatroString= -53234
cuatroString= new Date();
cuatroString= undefined
cuatroString= null
console.log(cuatroString)
var variable;
console.log(variable);

var numero2= 2
console.log(typeof numero2)

//Objetos JSON
mascota= {
    nombre: 'Cachetes',
        fechaDeNacimiento: new Date()
}
var harold= {
    id:1,
    nombre: 'Harold',
    createdAt: new Date(),
    updatedAt: new Date(),
    casado: true,
    prestamos: false,
    hijos: null,
    altura: 1.70,
    negativo: -1,
    mascota

}

console.log(harold)
console.log(harold.mascota.fechaDeNacimiento)
console.log('altura: ', harold.altura )
harold.altura= 1.3
console.log('altura: ', harold.altura )
harold.altura= {
    ancho: 23
}
console.log('altura: ', harold.altura )
delete harold.altura


harold.juegos= 'varios'
console.log(harold )

var arreglo = [1, 'harold', 2.4, false, true, null, undefined, new Date(), -458, { a: 'b'}]
console.log(arreglo)

var nuevoObjeto={
    papas : ['sdfs', 'asdas']
}
console.log(nuevoObjeto)

var matriz = [[0,1],[2,3]]
console.log(matriz [0][0])

var arregloDeObjetos=[
    {
        id: 1,
        nombre: 'harold'
    },
    {
        id:2,
        nombre: 'leslie'
    }
]
console.log(arregloDeObjetos)

//splice (delimita la posicion en la que vamos a trabajar, numero de objetos a eliminar)
arregloDeObjetos.splice(0,1)
console.log(arregloDeObjetos)
arregloDeObjetos.splice(0,0, {id:3, nombre: 'pollette'})
console.log(arregloDeObjetos)