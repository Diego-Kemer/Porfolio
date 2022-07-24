import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  @Output() datosCarrousel: EventEmitter<any> = new EventEmitter()
  @Output() envioArray: EventEmitter<any> = new EventEmitter()
  @Output() editamos: EventEmitter<any> = new EventEmitter()
  encender$ = new Subject<boolean>();
  public reciboArray: Array<any> = []
  
  constructor() { 
    this.envioArray.subscribe(data =>{
      this.reciboArray = data
    })
  }


  show():void{
    this.encender$.next(true)
  }

  hidden():void{
    this.encender$.next(false)
  }
}
