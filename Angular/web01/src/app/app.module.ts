import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './componentes/planeta-star-wars/planeta-star-wars.component';

@NgModule({
  declarations: [
    AppComponent,
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
