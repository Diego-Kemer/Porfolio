import { Component, Input, OnInit } from '@angular/core';
import { ITrabajo } from 'src/app/interfaces/itrabajo';
import { IUser } from 'src/app/interfaces/iuser';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  exp_edit!: boolean;
  @Input() work!: ITrabajo;
  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.exp_edit = true;
  }
  oculta(){
    this.exp_edit = false
  }
}
