import { Component, Input, OnInit } from '@angular/core';
import { IEstudio } from 'src/app/interfaces/iestudio';

@Component({
  selector: 'app-item-education',
  templateUrl: './item-education.component.html',
  styleUrls: ['./item-education.component.css']
})
export class ItemEducationComponent implements OnInit {
  @Input() data!: IEstudio;
  constructor() { }

  ngOnInit(): void {
  }

}
