import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalCrossingService {

  constructor(private http: HttpClient) { }

  getVillagers(): Observable<any>{
    return this.http.get<any>(
      "https://api.nookipedia.com/villagers",
      {headers: {'X-API-KEY': 'fbee4b58-8626-440b-93f4-77349b600b4b'}});

  }
}
