import { Component, Input, OnInit } from '@angular/core';
import { IProyecto } from 'src/app/interfaces/iproyecto';
import { IUser } from 'src/app/interfaces/iuser';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  @Input() user!: IUser;
  edit: boolean = false;
  crear: boolean = false;
  proyecto!: IProyecto;
  constructor(private uiServ: UiServiceService) { }

  ngOnInit(): void {
    this.uiServ.editamos.subscribe(res =>{
      this.proyecto = res;
      this.edit = true
    })
  }

  off(){
    this.edit = false
  }
  apaga(){
    this.crear = false
  }
  open(){
    this.crear = true;
  }
  


  datosEditar(){

  }
}
