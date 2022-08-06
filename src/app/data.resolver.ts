import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { IUser } from "./interfaces/iuser";
import { ApiService } from "./services/api/api.service";

@Injectable({providedIn: 'root'})
export class DataResolver implements Resolve<Observable<IUser>>{
    user: any;
    constructor(private apiServ: ApiService){}
    resolve():Observable<any> {
        return this.apiServ.traerUsuario()
    }
}