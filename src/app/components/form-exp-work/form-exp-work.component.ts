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
  @Output() newWork = new EventEmitter<ITrabajo>();

  constructor(private formB: FormBuilder,
              private apiServ: ApiService) { }

  ngOnInit(): void {
    this.formGroup = this.formB.group({
      id: this.work.id,
      fecha_inicio: '',
      fecha_fin: '',
      description: '',
      titulo: '',
      usuario: this.usuario
    })

    this.formGroup.patchValue({
      id: this.work.id,
      fecha_inicio: this.work.fecha_inicio,
      fecha_fin: this.work.fecha_fin,
      description: this.work.description,
      titulo: this.work.titulo
    })
  }
  ocultar(){
    this.exp_edit.emit(false)
  }

  send(){
    console.log(this.formGroup.value)
    this.apiServ.actualizarExperiencia(this.formGroup.value).subscribe(res=>{
      this.newWork.emit(this.formGroup.value)
      this.exp_edit.emit(false)
    })
  }
}
