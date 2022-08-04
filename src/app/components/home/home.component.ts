import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: any;
  public isLoading: any;

  constructor(private servApi: ApiService,
              private uiServ: UiServiceService) { 
                this.isLoading = this.uiServ.isLoading$
              }

  ngOnInit(): void {
    this.traerUsuario()

    this.servApi.actualUser.subscribe(res=>{
      this.traerUsuario()
    })
    this.uiServ.revisar()
  }
  traerUsuario(){
    this.servApi.traerUsuario().subscribe(res=>{
      this.user = res;
      console.log(this.user)
    })
  }

}
