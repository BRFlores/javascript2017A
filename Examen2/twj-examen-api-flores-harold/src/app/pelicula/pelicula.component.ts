import {Component, Input, OnInit} from '@angular/core';
import {PeliculaInterface} from '../Clase/PeliculaInterface';
import {Http} from '@angular/http';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: PeliculaInterface;
  constructor() { }

  ngOnInit() {

  }

}
