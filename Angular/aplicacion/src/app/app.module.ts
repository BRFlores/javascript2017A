import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente/planeta-star-wars/PlanetasSW/componente1/componente1.component';
import { Componente2Component } from './componente/planeta-star-wars/PlanetasSW/componente2/componente2.component';
import { Componente3Component } from './componente/planeta-star-wars/PlanetasSW/componente3/componente3.component';
import { Componente4Component } from './componente/planeta-star-wars/PlanetasSW/componente4/componente4.component';
import { Componente5Component } from './componente/planeta-star-wars/PlanetasSW/componente5/componente5.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './componente/planeta-star-wars/planeta-star-wars.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,
    InicioComponent,
    PlanetaStarWarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
