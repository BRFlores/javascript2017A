import { Component, OnInit } from '@angular/core';
import {PersonajesStarWarsInterface} from '../Interfaz/PersonajesStarWarsInterface';
import {Http} from '@angular/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  personaje: PersonajesStarWarsInterface[]= []
  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get('http://swapi.co/api/people/?page=2')
    //.map(response=>response.json())
      .subscribe(
        //funciones anonimas http://swapi.co/api/planets/?page=2
        (response) => {
          console.log('Response: ', response);
          console.log('dddd', response.json());
          const respuesta = response.json();
          console.log(respuesta.next);
          this.personaje = respuesta.results;
          console.log(this.personaje)

        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      )
  }
  cargarPersonajes(){

  }


}
