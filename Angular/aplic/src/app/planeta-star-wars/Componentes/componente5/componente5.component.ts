import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from '../../../inicio/Interface/PlanetaStarWarsInterface';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {
  @Input() terrenoPlanet: PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
