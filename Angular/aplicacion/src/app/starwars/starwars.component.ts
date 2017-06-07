import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {planetasStarWarsInterface} from "../interfaces/PlanetaStarWars";


@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {



  //planetas=[];
  planetas : planetasStarWarsInterface[]=[];


  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO
  }

  ngOnInit() {
    //Esta listo el componente...Aqui se pone la logica del componente porque aqui ya
    // esta listo
  }


  cargarPlanetas(){
    this._http.get("http://swapi.co/api/planets")
    //.map(response=>response.json())
      .subscribe(
        //funciones anonimas http://swapi.co/api/planets/?page=2
        (response)=>{
          console.log("Response: ",response);
          console.log(response.json());
          let respuesta=response.json();
          console.log("Holaa",respuesta.next);
          this.planetas=respuesta.results;
          this.planetas=this.planetas.map(
            (planeta)=>{

              planeta.imagen="/assests/imagenes/1.jpg";
            return planeta;
          }

          );
        },
        (error)=>{
          console.log("Error: ",error);
        },
        ()=>{
          console.log("Finally");
        }
      )
  }
}

/*interface planetasStarWars{
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
  imagen?: string;
}*/
