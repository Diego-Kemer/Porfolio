import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-work-carousel',
  templateUrl: './work-carousel.component.html',
  styleUrls: ['./work-carousel.component.css']
})
export class WorkCarouselComponent implements OnInit {
  public datosDelCarru: any
  public llamarCarousel:boolean = false

  constructor(private uiServ: UiServiceService) { }

  ngOnInit(): void {
    this.uiServ.datosCarrousel.subscribe(datos=>{
      this.datosDelCarru = datos.datos
      this.llamarCarousel = datos.dato
      console.log(datos)
    })
  }
  apagar(){
    this.llamarCarousel = false
  }
  

  

}
