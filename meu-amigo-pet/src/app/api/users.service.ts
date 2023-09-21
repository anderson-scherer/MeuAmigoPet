import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../../model/usuario';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url = `${API}/usuarios`;
  usuarios: Array<Usuario> = [];

  constructor(private http: HttpClient) {}

  getPets(): Observable<Usuario[]> {
    if(this.usuarios.length > 0) {
      return of(this.usuarios);
    }

    return this.http.get<Usuario[]>(this.url);
  }
}
