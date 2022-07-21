import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() usuario!: any;
  editarAbout: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  editar():void{
    this.editarAbout = true;
  }

  noEditar(){
    this.editarAbout = false;
    console.log('ok')
  }

}
