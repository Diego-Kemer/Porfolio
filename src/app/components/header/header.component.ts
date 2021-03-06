import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/iuser';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user!: IUser;
  public editar = this.uiServ.encender$;

  constructor( private uiServ: UiServiceService) { }

  ngOnInit(): void {
  }
  mostrar():void{
    this.uiServ.show()
  }


}
