import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersonajesRyMAPI} from "../common/PersonajesRyMAPI";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }

  getCharacters(): Observable<PersonajesRyMAPI>{
    return this.http.get<PersonajesRyMAPI>(
      'https://rickandmortyapi.com/api/character');
  }

}
