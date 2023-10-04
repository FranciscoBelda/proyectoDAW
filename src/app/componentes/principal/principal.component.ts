import { Component } from '@angular/core';
import {Persona} from "../../common/interfaces";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  nombre: string = 'pepito';
  numero = 5;
  coleccion = ["Sara", "Miguel", "Laura", "Manuel"];
  personaA: Persona = {
    nombre: 'Pedro',
    edad: 23,
    profesion: 'Fontanero'
  };
  personas: Persona[] = [
    {
      nombre: 'Paco',
      edad: 22,
      profesion: 'Albañil'
    },
    {
      nombre: 'Laura',
      edad: 25,
      profesion: 'Bibliotecaria'
    },
    {
      nombre: 'Sara',
      edad: 29,
      profesion: 'Bombera'
    },
  ]
  objetoComplejo = {
    objeto: {
      nombre: 'Manolo',
      edad: 34,
      profesion: 'Ingeniero'
    },
    aficiones: ["Pintura","Lectura"]
  };
}
