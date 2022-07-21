import { Component, Input, OnInit } from '@angular/core';
import { IProyecto } from 'src/app/interfaces/iproyecto';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-item-work',
  templateUrl: './item-work.component.html',
  styleUrls: ['./item-work.component.css']
})
export class ItemWorkComponent implements OnInit {
  @Input() user!: IUser;
  @Input() proyecto!: IProyecto;

  constructor() { }

  ngOnInit(): void {
  }

}
