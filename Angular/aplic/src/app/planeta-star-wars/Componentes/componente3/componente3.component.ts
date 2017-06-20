import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from '../../../inicio/Interface/PlanetaStarWarsInterface';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  @Input() gravedadPlanet: PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
