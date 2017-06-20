import {Component, Input, OnInit} from '@angular/core';
import {Artistainterface} from '../../Interfaces/Artistainterface';


@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {
 @Input() artistass: Artistainterface ;
  constructor() { }

  ngOnInit() {


  }

}
