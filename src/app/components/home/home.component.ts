import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user!: IUser;
  

  constructor(private servApi: ApiService,
              private uiServ: UiServiceService,
              private readonly route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.traerUsuario()
    this.servApi.actualUser.subscribe(res=>{
      this.traerUsuario()
    })
    this.uiServ.revisar()
    this.user = this.route.snapshot.data['user'];
  }
  
  
  traerUsuario(){
    this.servApi.traerUsuario().subscribe(res=>{
      this.user = res;
    })
  }

}
