import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: any;

  constructor(private servApi: ApiService) { }

  ngOnInit(): void {
    this.servApi.traerUsuario().subscribe(res=>{
      this.user = res;
      console.log(this.user)
    })
    
  }

}
