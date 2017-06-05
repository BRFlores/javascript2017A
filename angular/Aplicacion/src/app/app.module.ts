import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { StarwarsComponent } from './starwars/starwars.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    StarwarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [StarwarsComponent]
})
export class AppModule { }
