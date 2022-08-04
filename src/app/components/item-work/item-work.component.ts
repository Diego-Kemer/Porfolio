import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProyecto } from 'src/app/interfaces/iproyecto';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-item-work',
  templateUrl: './item-work.component.html',
  styleUrls: ['./item-work.component.css']
})
export class ItemWorkComponent implements OnInit {
  @Input() user!: IUser;
  @Input() proyecto!: IProyecto;
  ruteEdit!: boolean;
  
  constructor(private uiServ: UiServiceService,
              private apiServ: ApiService) { }

  ngOnInit(): void {
    this.uiServ.envioArray.emit(this.proyecto)
    this.ruteEdit = this.uiServ.ruteEdit
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

  eliminar(){
    if (confirm(`Seguro que desea eliminar ${this.proyecto.name}?`)) {
      this.apiServ.eliminarProyecto(this.proyecto).subscribe(res=>{
        this.apiServ.actualUser.emit()
      })
    }
  }

}
