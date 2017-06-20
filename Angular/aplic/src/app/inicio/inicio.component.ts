import { Component, OnInit } from '@angular/core';

import {PlanetaStarWarsInterface} from './Interface/PlanetaStarWarsInterface';
import {Http} from '@angular/http/';
import 'rxjs/add/operator/map';
import {UsuarioClass} from '../Clase/UsuarioClass';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuarios: UsuarioClass[]= [];
  nuevoUsuario: UsuarioClass= new UsuarioClass('');
  planetas: PlanetaStarWarsInterface[]= [];

  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get('http://localhost:1337/Usuario')
      .subscribe(respuesta => {
          const rjson: UsuarioClass[] = respuesta.json();
          this.usuarios = rjson;
          console.log('Usuarios: ', this.usuarios);
        },
        error => {
          console.log('Error: ', error);
        }
      )
    console.log('Nuevo Usuario: ', this.nuevoUsuario)
  }

  cargarPlanetas(){
    this._http.get('http://swapi.co/api/planets')
    //.map(response=>response.json())
      .subscribe(
        //funciones anonimas http://swapi.co/api/planets/?page=2
        (response) => {
          console.log('Response: ', response);
          console.log(response.json());
          const respuesta = response.json();
          console.log(respuesta.next);
          this.planetas = respuesta.results;

          this.planetas = this.planetas.map(
            (planeta) => {
              planeta.imagenUrl = 'assets/Imagenes/' + planeta.name + '.jpg';
              return planeta;
            }
          )
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      )
  }
  crearUsuario(){
    /*
     let usuario={
     nombre:this.nuevoUsuario.nombre
     }*/
    this._http.post('http://localhost:1337/Usuario', this.nuevoUsuario)
      .subscribe(respuesta => {
          const respuestaJson = respuesta.json();
          console.log('respuestaJson: ', respuestaJson);
          this.usuarios.push(respuestaJson)
        },
        error => {
          console.log('Error ', error)
        }
      )
  }

  eliminarUsuario(usuario: UsuarioClass, indice: number) {

    console.log('Indice:', this.usuarios.indexOf(usuario));
    console.log('Indice con index: ', indice);
    console.log('Usuarios : ', this.usuarios);
    console.log('Usuariofff : ', usuario.id);
    this.usuarios.splice(indice, 1);

    this._http.delete('http://localhost:1337/Usuario?id=' + usuario.id)
      .subscribe(respuesta => {
          const respuestaJson = respuesta.json();
          console.log('respuestaJsonoooooo: ', respuestaJson);
        },
        error => {
          console.log('Error ', error)
        }
      )

  }
}
