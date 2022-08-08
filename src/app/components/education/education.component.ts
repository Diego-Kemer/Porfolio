import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IEstudio } from 'src/app/interfaces/iestudio';
import { IUser } from 'src/app/interfaces/iuser';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, AfterViewInit{
  @Input() user!: IUser;
  @ViewChildren('hr') elementos!: QueryList<any>;
  ruteEdit: boolean = false;
  editar!: boolean;
  public estudiosUser!: Array<IEstudio>;
  constructor(private uiServ: UiServiceService,
              private route: Router) { 
                this.editar = false;
              }

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

  open(){
    this.editar = true;
  }

  cierre(){
    this.editar = false;
  }

  

}
