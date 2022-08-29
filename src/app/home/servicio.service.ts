import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from './interfaces/usuarios';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private _http: HttpClient) { }

  ObtenerUsuarios(): Observable<Usuarios[]>{
    return this._http.get<Usuarios[]>('https://jsonplaceholder.typicode.com/users')
  }
}
