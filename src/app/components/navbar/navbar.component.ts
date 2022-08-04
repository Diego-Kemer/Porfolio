import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public login: boolean = true;
  public hayCookie: boolean = false;

  constructor(private rute: Router,
              private cookieService: CookieService,
              private uiServ: UiServiceService) {
     
               }

  ngOnInit(): void {
    this.uiServ.hayCookie$.subscribe(res=>{
      this.hayCookie = res
    })

    this.rute.events.subscribe((res: any)=>{
      if(res.url == '/login'){
        this.login = false
      }
      if(res.url == '/home'){
        this.login = true
      }
    })
  }
  navegar(){
    this.login = false
  }
  navegarAlHome(){
    this.login = true
  }

  salir(){
    this.cookieService.deleteAll('diego-porfolio')
    this.uiServ.hayCookie$.next(false)
    this.rute.navigate(['/home'])
  }
}
