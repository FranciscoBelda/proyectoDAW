import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { Principal2Component } from './componentes/principal2/principal2.component';
import { Principal3Component } from './componentes/principal3/principal3.component';
import { ErrorPageComponent } from './componentes/error-page/error-page.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { PersonajeComponent } from './componentes/personaje/personaje.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Principal2Component,
    Principal3Component,
    ErrorPageComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
    PersonajesComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
