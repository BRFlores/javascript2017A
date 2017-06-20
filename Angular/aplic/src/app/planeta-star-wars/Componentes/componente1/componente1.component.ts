import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from '../../../inicio/Interface/PlanetaStarWarsInterface';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  @Input() climatePlanet: PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
