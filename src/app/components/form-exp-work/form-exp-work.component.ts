import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITrabajo } from 'src/app/interfaces/itrabajo';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-form-exp-work',
  templateUrl: './form-exp-work.component.html',
  styleUrls: ['./form-exp-work.component.css']
})
export class FormExpWorkComponent implements OnInit {
  formGroup!: FormGroup;
  @Input() work: any;
  @Input() usuario!: IUser;
  @Output() exp_edit = new EventEmitter<boolean>();

  constructor(private formB: FormBuilder,
              private apiServ: ApiService) { }

  ngOnInit(): void {
    this.formGroup = this.formB.group({
      id: Number,
      fecha_inicio: '',
      fecha_fin: '',
      description: '',
      titulo: '',
      usuario: this.usuario
    })

    if(this.work){
      this.formGroup.patchValue({
        id: this.work.id,
        fecha_inicio: this.work.fecha_inicio,
        fecha_fin: this.work.fecha_fin,
        description: this.work.description,
        titulo: this.work.titulo
    })
    }
    
  }
  ocultar(){
    this.exp_edit.emit(false)
  }

  sendEditar(){
    this.formGroup.value.id = this.work.id
    this.apiServ.actualizarExperiencia(this.formGroup.value).subscribe(res=>{
      this.apiServ.actualUser.emit()
      this.exp_edit.emit(false)
    })
  }

  sendCrear(){
    this.apiServ.crearExperiencia(this.formGroup.value).subscribe(res=>{
      this.apiServ.actualUser.emit()
      this.exp_edit.emit()
    })
  }
}
