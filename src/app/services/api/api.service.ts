import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstudio } from 'src/app/interfaces/iestudio';
import { IUser } from 'src/app/interfaces/iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = environment.api;

  constructor(private http: HttpClient) { }
  traerUsuario(): Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/usuario/16`)
  }

  traerEstudio(): Observable<Array<IEstudio>>{
    return this.http.get<Array<IEstudio>>(`${this.url}/estudios`)
  }

  actualizarUser(user: IUser): Observable<void>{
    return this.http.put<void>(`${this.url}/usuario`, user)
  }
}
