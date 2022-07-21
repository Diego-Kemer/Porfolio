import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  @Input() user!: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
