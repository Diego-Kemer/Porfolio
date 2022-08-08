import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @Input() usuario!: any;
  @ViewChildren('hr') elementos!: QueryList<any>;
  editarAbout: boolean = false;
  ruteEdit: boolean = false;
  constructor( private route: Router,
                private uiServ: UiServiceService ) { }

  ngOnInit(): void {
    if(this.route.url == '/home/admin'){
      this.ruteEdit = true
    }
    else{
      this.ruteEdit = false
    }
    
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', ()=>{
      this.uiServ.subrayarScroll(this.elementos, 'subrayar .5s linear forwards')
    })
    
  }

  editar():void{
    this.editarAbout = true;
  }

  noEditar(){
    this.editarAbout = false;
  }

}
