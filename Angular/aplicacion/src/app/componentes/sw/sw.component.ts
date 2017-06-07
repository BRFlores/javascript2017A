import {Component, Input, OnInit} from '@angular/core';
import {planetasStarWarsInterface} from "../../interfaces/PlanetaStarWars";

@Component({
  selector: 'app-sw',
  templateUrl: './sw.component.html',
  styleUrls: ['./sw.component.css']
})
export class SwComponent implements OnInit {

  @Input() planeta:planetasStarWarsInterface
  constructor() { }

  ngOnInit() {

    console.log(`El valor del planeta es:`,this.planeta);

  }

}
