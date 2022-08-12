import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {
  @Output() navegar = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  emitirNavegacion(evento: string){
    this.navegar.emit(evento)
  }
}
