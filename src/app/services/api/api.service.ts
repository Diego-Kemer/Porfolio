import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstudio } from 'src/app/interfaces/iestudio';
import { IInstitucion } from 'src/app/interfaces/iinstitucion';
import { ITrabajo } from 'src/app/interfaces/itrabajo';
import { IUser } from 'src/app/interfaces/iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = environment.api;
  @Output() actualUser = new EventEmitter()

  constructor(private http: HttpClient) { }
  traerUsuario(): Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/usuario/2`)
  }

  actualizarUser(user: IUser): Observable<void>{
    return this.http.put<void>(`${this.url}/usuario`, user)
  }

  actualizarExperiencia(work: ITrabajo): Observable<void>{
    return this.http.put<void>(`${this.url}/trabajo`, work)
  }

  traerInstituciones(): Observable<Array<IInstitucion>>{
    return this.http.get<Array<IInstitucion>>(`${this.url}/instituciones`)
  }

  crearInstitucion(inst: IInstitucion): Observable<any>{
    return this.http.post<any>(`${this.url}/institucion`, inst)
  }

  actualizarEstudio(est: IEstudio): Observable<any>{
    return this.http.put<any>(`${this.url}/estudio`, est)
  }
}
