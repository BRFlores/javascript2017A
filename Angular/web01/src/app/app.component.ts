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
  nombre:"",
  apellido:"Flores"
}
url:string="https://angular.io";
source:string= "https://carlosazaustre.es/blog/content/images/2015/02/square_odd9l7.png";
parrafo:string;
background:string="blue";
constructor(){
  this.usuario.nombre="Bryan";
  this.parrafo="me mima mi mama";
  setTimeout(()=> {
    this.usuario.nombre="Harold"
  },3000)
  //console.log("constructor");
  //this.holaMundo();
  //console.log(this.saludar(this.usuario.nombre, this.usuario.apellido));
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
