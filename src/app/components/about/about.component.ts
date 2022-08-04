import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() usuario!: any;
  editarAbout: boolean = false;
  ruteEdit: boolean = false;
  constructor( private route: Router ) { }

  ngOnInit(): void {
    if(this.route.url == '/home/admin'){
      this.ruteEdit = true
    }
    else{
      this.ruteEdit = false
    }
    
  }

  editar():void{
    this.editarAbout = true;
  }

  noEditar(){
    this.editarAbout = false;
  }

}
