import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstudio } from 'src/app/interfaces/iestudio';
import { IInstitucion } from 'src/app/interfaces/iinstitucion';
import { IProyecto } from 'src/app/interfaces/iproyecto';
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
  //Para datos del usuario
  traerUsuario(): Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/auth/usuario/1`)
  }

  actualizarUser(user: IUser): Observable<void>{
    return this.http.put<void>(`${this.url}/usuario`, user)
  }

  //Para la experiencia laboral
  actualizarExperiencia(work: ITrabajo): Observable<void>{
    return this.http.put<void>(`${this.url}/trabajo`, work)
  }

  crearExperiencia(work: ITrabajo): Observable<any>{
    return this.http.post<any>(`${this.url}/trabajo`, work)
  }

  eliminarExperiencia(exp: ITrabajo): Observable<any>{
    return this.http.delete<any>(`${this.url}/trabajo/${exp.id}`)
  }

  //Para las instituciones
  traerInstituciones(): Observable<Array<IInstitucion>>{
    return this.http.get<Array<IInstitucion>>(`${this.url}/auth/instituciones`)
  }

  crearInstitucion(inst: IInstitucion): Observable<any>{
    return this.http.post<any>(`${this.url}/institucion`, inst)
  }

  //Para la formación académica
  crearEstudio(est: IEstudio): Observable<any>{
    return this.http.post<any>(`${this.url}/estudio`, est)
  }
  actualizarEstudio(est: IEstudio): Observable<any>{
    return this.http.put<any>(`${this.url}/estudio`, est)
  }
  eliminarEstudio(est: IEstudio): Observable<any>{
    return this.http.delete<any>(`${this.url}/estudio/${est.id}`)
  }

  //Para los proyectos
  actualizarProyecto(proy: IProyecto): Observable<any>{
    return this.http.put<any>(`${this.url}/proyecto`, proy)
  }

  crearProyecto(proy: IProyecto): Observable<any>{
    return this.http.post<any>(`${this.url}/proyecto`, proy)
  }

  eliminarProyecto(proy: IProyecto): Observable<any>{
    return this.http.delete<any>(`${this.url}/proyecto/${proy.id}`)
  }

  //Para ingresar
  login(log: any): Observable<any>{
    return this.http.post<any>(`${this.url}/auth/login`, log)
  }
}
