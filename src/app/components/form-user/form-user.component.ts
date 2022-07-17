import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  constructor( private uiServ: UiServiceService) { }

  ngOnInit(): void {
  }
  ocultar(): void{
    this.uiServ.hidden()
  }

}
