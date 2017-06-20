import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistasComponent } from './Componentes/artistas/artistas.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { EstiloComponent } from './Componentes/artistas/estilo/estilo.component';
import { PaisResidenciaComponent } from './Componentes/artistas/pais-residencia/pais-residencia.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistasComponent,
    InicioComponent,
    EstiloComponent,
    PaisResidenciaComponent
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

