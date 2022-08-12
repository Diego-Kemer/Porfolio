import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('about') about!: ElementRef<any>;
  @ViewChild('experience') experience!: ElementRef<any>;
  @ViewChild('education') education!: ElementRef<any>;
  @ViewChild('skills') skills!: ElementRef<any>;
  @ViewChild('works') works!: ElementRef<any>;
  

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

  moverse(e: string){
    if(e == 'about'){
      document.documentElement.scrollTop = this.about.nativeElement.offsetTop - 200
    }
    if(e == 'experience'){
      document.documentElement.scrollTop = this.experience.nativeElement.offsetTop - 200
    }
    if(e == 'education'){
      document.documentElement.scrollTop = this.education.nativeElement.offsetTop - 200
    }
    if(e == 'skills'){
      document.documentElement.scrollTop = this.skills.nativeElement.offsetTop - 200
    }
    if(e == 'works'){
      document.documentElement.scrollTop = this.works.nativeElement.offsetTop - 200
    }
  }


}
