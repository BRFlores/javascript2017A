import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {
  @Input() Estiloartista: string
  constructor() { }

  ngOnInit() {
  }

}
