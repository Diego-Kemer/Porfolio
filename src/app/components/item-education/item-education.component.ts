import { Component, Input, OnInit } from '@angular/core';
import { IEstudio } from 'src/app/interfaces/iestudio';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-item-education',
  templateUrl: './item-education.component.html',
  styleUrls: ['./item-education.component.css']
})
export class ItemEducationComponent implements OnInit {
  @Input() user!: IUser;
  @Input() data!: IEstudio;
  editar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.editar = true
  }

  oculta(){
    this.editar = false
  }
}
