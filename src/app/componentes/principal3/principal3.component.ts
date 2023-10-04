import {Component, OnInit} from '@angular/core';
import {Villager} from "../../common/villagers";
import {AnimalCrossingService} from "../../services/animal-crossing.service";

@Component({
  selector: 'app-principal3',
  templateUrl: './principal3.component.html',
  styleUrls: ['./principal3.component.css']
})
export class Principal3Component implements OnInit{
villagers: Villager[] = [];

constructor(private acService: AnimalCrossingService) {
}

  ngOnInit(): void {
  this.loadVillagers();
  }

  private loadVillagers() {
    this.acService.getVillagers().subscribe(
      {
        next: (value) => {
          console.log(value);
      },
        error: err => {
        console.error(err);
      },
        complete: () => {
          console.log('Complete')
        }
      }
    );
  }
}
