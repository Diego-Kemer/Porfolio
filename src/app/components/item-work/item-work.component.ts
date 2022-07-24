import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProyecto } from 'src/app/interfaces/iproyecto';
import { IUser } from 'src/app/interfaces/iuser';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-item-work',
  templateUrl: './item-work.component.html',
  styleUrls: ['./item-work.component.css']
})
export class ItemWorkComponent implements OnInit {
  @Input() user!: IUser;
  @Input() proyecto!: IProyecto;
  
  constructor(private uiServ: UiServiceService) { }

  ngOnInit(): void {
    this.uiServ.envioArray.emit(this.proyecto)
  }
  enviarDatos(proyecto: IProyecto){
    console.log(proyecto)
    this.uiServ.datosCarrousel.emit({
      datos: proyecto,
      dato: true
    })
  }

  editar(proyecto: any){
    this.uiServ.editamos.emit(proyecto)
  }

}
