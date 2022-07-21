import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent implements OnInit {
  @Input() data!: any;
  @Output() cerrar = new EventEmitter()
  formGroup!: FormGroup;
  constructor(private fBuild: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fBuild.group({
      institucion: '',
      provincia: '',
      localidad: '',
      fecha_inicio: '',
      fecha_fin: '',
      modalidad: ''
    })

    this.formGroup.patchValue({

    })
  }

  ocultar(){
    this.cerrar.emit()
  }

  send(){}
}
