import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = environment.api;

  constructor(private http: HttpClient) { }
  traerUsuario(): Observable<any>{
    return this.http.get(`${this.url}/usuario/14`)
  }
}
