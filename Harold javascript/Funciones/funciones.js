/**
 * Created by USRDEL on 5/3/17.
 */
// en el archivo funciones

function holaMundo(){
    console.log('hola mundo');
}
holaMundo();

function doble(numero){
    return numero*2;
}
console.log(doble(3))

function multiplicar2(a,b){
    return a*b;
}
console.log(multiplicar2(4,3));
var dos= multiplicar2(1,2);
var multi= multiplicar2;
console.log(multi(2,3))
// void
 var hola= function() {
    console.log('hola');
 }
 hola();
console.log(hola())

function hazAlgo(algo) {
    algo();
}
hazAlgo(function() {console.log('hola haz algo por favor ...djhcgajefgauiwsdvsdv')});
hazAlgo(function() {return 2});