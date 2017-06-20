import { Component, OnInit } from '@angular/core';
import {Artistainterface} from '../../Interfaces/Artistainterface';
import {Http} from '@angular/http';
import {ArtistaClass} from '../../Clase/ArtistaClass';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  artistas: ArtistaClass[]= []
  artista: ArtistaClass= new ArtistaClass()

  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get('http://localhost:1337/Artista')
      .subscribe(respuesta => {
          const rjson: Artistainterface[] = respuesta.json();
          this.artistas = rjson;
          console.log('Usuarios: ', this.artistas);
        },
        error => {
          console.log('Error: ', error);
        }
      )

  }

  crearArtista(){
    this._http.post('http://localhost:1337/Artista', this.artista)
      .subscribe(respuesta => {
          const respuestaJson = respuesta.json();

          console.log('respuestaJson: ', respuestaJson);
          this.artistas.push(respuestaJson)
          this.artista=new ArtistaClass()
        },
        error => {
          console.log('Error ', error)
        }
      )
  }

}
