import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  @Input() user!: IUser;

  constructor(  private uiServ: UiServiceService, 
                private formB: FormBuilder,
                private apiServ: ApiService) { }
  public formG!: FormGroup;
  ngOnInit(): void {
    this.formG = this.formB.group({
      idusuario: this.user.idusuario,
      name: '',
      lastname: '',
      profesion: '',
      edad: '',
      nacionalidad: '',
      nivel: '',
      foto_portada: '',
      sobre_mi: ''

    })
     this.formG.patchValue({
       name: this.user.name,
       lastname: this.user.lastname,
       profesion: this.user.profesion,
       edad: this.user.edad,
       nacionalidad: this.user.nacionalidad,
       nivel: this.user.nivel,
       foto_portada: this.user.foto_portada,
       sobre_mi: this.user.sobre_mi
     })
  }
  ocultar(): void{
    this.uiServ.hidden()
  }

  send():void{
    console.log(this.formG.value)
    this.apiServ.actualizarUser(this.formG.value).subscribe(res=>{
      this.apiServ.actualUser.emit()
      this.uiServ.hidden()
    })
    
  }

}
