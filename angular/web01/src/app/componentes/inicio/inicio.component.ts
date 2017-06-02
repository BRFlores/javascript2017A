import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre = 'Harold';
  arregloUsuarios = [{
    nombre: 'Bryan',
    apellido: 'Flores',
    conectado: true
  }, {
    nombre: 'Pedro',
    apellido: 'Maldonado',
    conectado: true
  }, {
    nombre: 'Jhon',
    apellido: 'Rodriguez',
    conectado: false
  } , {
    nombre: 'Juan Jose',
    apellido: 'Flores',
    conectado: true
  }];

  constructor(private _http: Http) {
    //inicia la clase
    //el componente no esta listo
  }

  ngOnInit() {
    //esta listo el componente
  }
  cambiarNombre(): void {
    this.nombre = 'Andreaa';
  }

  cambiarOtroNombre() {
    this.nombre = 'Mariaa';
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;
  }
  cargarPlanetas(){
    this._http.get('http://swap.co/api/planets').map(response => response.json)
      .subscribe(
      (response) => { console.log('response; ', response); console.log(response.json); },
      (error) => { console.log('Error: ', error); },
      () => { console.log('Finally'); }
    );
  }
}
