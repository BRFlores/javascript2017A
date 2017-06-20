import {Component, Input, OnInit} from '@angular/core';
import {PersonajesStarWarsInterface} from '../Interfaz/PersonajesStarWarsInterface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  @Input() personajesw: PersonajesStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
