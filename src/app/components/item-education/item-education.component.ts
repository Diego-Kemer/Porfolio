import { Component, Input, OnInit } from '@angular/core';
import { IEstudio } from 'src/app/interfaces/iestudio';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-item-education',
  templateUrl: './item-education.component.html',
  styleUrls: ['./item-education.component.css']
})
export class ItemEducationComponent implements OnInit {
  @Input() user!: IUser;
  @Input() data!: IEstudio;
  ruteEdit!: boolean;
  editar: boolean = false;
  constructor(private apiServ: ApiService,
              private uiServ: UiServiceService) { }

  ngOnInit(): void {
    this.ruteEdit = this.uiServ.ruteEdit
  }

  mostrar(){
    this.editar = true
  }

  oculta(){
    this.editar = false
  }

  eliminar(){
    if(confirm(`Desea eliminar ${this.data.titulo}?`)){
      this.apiServ.eliminarEstudio(this.data).subscribe(res=>{
        this.apiServ.actualUser.emit()
      })
    }
  }
}
