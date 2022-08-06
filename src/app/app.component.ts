import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from './interfaces/iuser';
import { ApiService } from './services/api/api.service';
import { UiServiceService } from './services/ui/ui-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  title = 'porfolio_web';
  public isLoading: any;
 

  constructor(private uiServ: UiServiceService){
                this.isLoading = this.uiServ.isLoading$
  }

}
