import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from '../../model/pet';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PetsService {

  url = `${API}/animais-resgatados`;
  pets: Array<Pet> = [];

  constructor(private http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    if(this.pets.length > 0) {
      return of(this.pets);
    }

    return this.http.get<Pet[]>(this.url);
  }
}
