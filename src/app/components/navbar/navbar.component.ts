import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public login!: boolean;

  constructor(private rute: Router) { }

  ngOnInit(): void {
    if(this.rute.url == '/login'){
      this.login = true
    }else{
      this.login = false
    }
  }

  
}
