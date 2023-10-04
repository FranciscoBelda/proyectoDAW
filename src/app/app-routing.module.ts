import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./componentes/principal/principal.component";
import {Principal2Component} from "./componentes/principal2/principal2.component";
import {Principal3Component} from "./componentes/principal3/principal3.component";
import {ErrorPageComponent} from "./componentes/error-page/error-page.component";
import {PersonajesComponent} from "./componentes/personajes/personajes.component";
import {PersonajeComponent} from "./componentes/personaje/personaje.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'personajes'
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'personaje/:id',
    component: PersonajeComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'principal2',
    component: Principal2Component
  },
  {
    path: 'principal3',
    component: Principal3Component
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
