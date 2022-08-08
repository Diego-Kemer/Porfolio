import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
