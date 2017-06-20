import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from '../../../inicio/Interface/PlanetaStarWarsInterface';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  @Input() diameterPlanet: PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
