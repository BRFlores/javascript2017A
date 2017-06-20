import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlanetaStarWarsComponent } from './planeta-star-wars/planeta-star-wars.component';
import {HttpModule} from '@angular/http';
import { Componente1Component } from './planeta-star-wars/Componentes/componente1/componente1.component';
import { Componente2Component } from './planeta-star-wars/Componentes/componente2/componente2.component';
import { Componente3Component } from './planeta-star-wars/Componentes/componente3/componente3.component';
import { Componente4Component } from './planeta-star-wars/Componentes/componente4/componente4.component';
import { Componente5Component } from './planeta-star-wars/Componentes/componente5/componente5.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
