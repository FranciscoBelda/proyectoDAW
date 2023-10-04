import {Component, OnInit} from '@angular/core';
import {PersonajesRyMAPI, Result} from "../../common/PersonajesRyMAPI";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit{
infoAPI!: PersonajesRyMAPI;
//listado: Result[] = [];

constructor(private charService:CharactersService) {
}

  ngOnInit(): void {
    this.cargarPersonajes();
  }


  private cargarPersonajes() {
    this.charService.getCharacters().subscribe(
      {
        next: (data: PersonajesRyMAPI) => {
          this.infoAPI = data;
          //this.listado.push(...this.infoAPI.results.slice(0,10));
          //console.log(this.listado);
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log("Complete");
        }
      }
    )
  }
}
