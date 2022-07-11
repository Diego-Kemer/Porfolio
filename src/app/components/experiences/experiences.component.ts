import { Component, Input, OnInit } from '@angular/core';
import { ITrabajo } from 'src/app/interfaces/itrabajo';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  @Input() experinces!: Array<ITrabajo>;
  constructor() { }

  ngOnInit(): void {
  }

}
