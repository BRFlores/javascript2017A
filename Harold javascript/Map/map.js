/**
 * Created by USRDEL on 5/10/17.
 */
//map sirve para transformar el arreglo
/*let arreglo=[1,4,9,9,9,10];
 let resultado= arreglo.map((valor,indice)=> {
 return valor/5;
 });
 console.log(resultado); */

let arreglo= [
    {nombre:"Harold",
        fechaCreacion: new Date()},
    {nombre: "Leslie",
        fechaCreacion: new Date()},

]
let resultado= arreglo.map((valor,indice)=> {
        return "Sr "+valor.nombre+"   "+ valor.fechaCreacion;
});
console.log(resultado);