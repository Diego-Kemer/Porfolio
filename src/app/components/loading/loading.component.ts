import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
  <div class="container" style="--fondo:{{fondo}}">
    <div class="lds-dual-ring"></div>
  </div> `,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() background!: string;
  public fondo: string = 'rgba(7, 7, 7, 0.534)'
  constructor() { }

  ngOnInit(): void {
    if(this.background){
      this.fondo = this.background;
    }
  }

}
