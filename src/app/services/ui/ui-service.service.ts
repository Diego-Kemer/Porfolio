import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  @Output() datosCarrousel: EventEmitter<any> = new EventEmitter()
  @Output() envioArray: EventEmitter<any> = new EventEmitter()
  @Output() editamos: EventEmitter<any> = new EventEmitter()
  encender$ = new Subject<boolean>();
  isLoading$ = new Subject<boolean>();
  hayCookie$ = new Subject<boolean>();
  ruteEdit: boolean = false;
  public reciboArray: Array<any> = []
  
  constructor(private route: Router) { 
    this.envioArray.subscribe(data =>{
      this.reciboArray = data
    })
  }
  revisar():void{
    if(this.route.url == '/home/admin'){
      this.ruteEdit = true
    }
    else{
      this.ruteEdit = false
    }
  }

  loading():void{
    this.isLoading$.next(true)
  }

  notLoading():void{
    this.isLoading$.next(false)
  }

  show():void{
    this.encender$.next(true)
  }

  hidden():void{
    this.encender$.next(false)
  }
}
