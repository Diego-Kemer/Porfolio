import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-form-exp-work',
  templateUrl: './form-exp-work.component.html',
  styleUrls: ['./form-exp-work.component.css']
})
export class FormExpWorkComponent implements OnInit {
  formGroup!: FormGroup;
  @Output() exp_edit = new EventEmitter<boolean>()

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formB.group({
      id: Number,
      fecha_inicio: '',
      fecha_fin: '',
      description: '',
      titulo: ''
    })
  }
  ocultar(){
    this.exp_edit.emit(false)
  }

  send(){}
}
