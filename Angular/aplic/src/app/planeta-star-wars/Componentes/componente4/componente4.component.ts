import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from '../../../inicio/Interface/PlanetaStarWarsInterface';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {
  @Input() periodoOrbitalPlanet:PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
