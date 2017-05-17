import { Component } from '@angular/core';
import {log} from "util";

@Component({
  selector: 'twj-raiz',
 templateUrl: './app.component.html',
  //template: "<h1>Hola mundo</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
usuario:usuarioInt= {
  nombre:"Harold",
  apellido:"Flores"
}
constructor(){
  console.log("constructor");
  this.holaMundo();
  console.log(this.saludar(this.usuario.nombre, this.usuario.apellido));
}
holaMundo(){
  console.log("hola mundo");
}
saludar(nombre:string,apellido?:string):string{
  return `Hola ${nombre} ${apellido}`;
}
}
interface usuarioInt{
  nombre:string,
  apellido:string
}
