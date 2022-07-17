import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  encender$ = new Subject<boolean>();

  constructor() { }
  show():void{
    this.encender$.next(true)
  }

  hidden():void{
    this.encender$.next(false)
  }
}
