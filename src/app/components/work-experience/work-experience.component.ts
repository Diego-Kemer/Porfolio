import { Component, Input, OnInit } from '@angular/core';
import { ITrabajo } from 'src/app/interfaces/itrabajo';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';
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
  ruteEdit!: boolean;

  constructor(private apiSer: ApiService,
              private uiServ: UiServiceService) { }

  ngOnInit(): void {
    this.ruteEdit = this.uiServ.ruteEdit
  }

  mostrar(){
    this.exp_edit = true;
  }
  oculta(){
    this.exp_edit = false
  }
  eliminar(){
    if(confirm(`Desea eliminar ${this.work.titulo}?`)){
      this.apiSer.eliminarExperiencia(this.work).subscribe(res=>{
        this.apiSer.actualUser.emit()
      })
    }
  }
}
