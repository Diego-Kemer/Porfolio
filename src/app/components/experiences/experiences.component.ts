import { Component, Input, OnInit } from '@angular/core';
import { ITrabajo } from 'src/app/interfaces/itrabajo';
import { IUser } from 'src/app/interfaces/iuser';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  @Input() user!: IUser;
  editar: boolean = false;
  ruteEdit!: boolean;
  constructor(private uiServ: UiServiceService) { }

  ngOnInit(): void {
    this.ruteEdit = this.uiServ.ruteEdit
  }

  open(){
    this.editar = true;
  }
  oculta(){
    this.editar = false;
  }
}
