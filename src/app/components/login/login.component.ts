import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api/api.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  isLoading: any;
  constructor(private formB: FormBuilder,
              private apiServ: ApiService,
              private rute: Router,
              private cookieService: CookieService,
              private uiServ: UiServiceService) {
                  this.isLoading = this.uiServ.isLoading$
               }

  ngOnInit(): void {
    this.formLogin = this.formB.group({
      userName: '',
      password: ''
    })
  }

  login(){
    console.log(this.formLogin.value)
    this.apiServ.login(this.formLogin.value).subscribe(res=>{
      console.log(res)
      if(res.token){
        this.cookieService.set('diego-porfolio', res.token)
        this.rute.navigate(['/home/admin'])
      }else{
        console.log("Login fallido")
      }
      
    })
  }

}
