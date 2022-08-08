import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IUser } from 'src/app/interfaces/iuser';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit, AfterViewInit {
  @Input() user!: IUser;
  @ViewChildren('hr') elementos!: QueryList<any>;
  editar: boolean = false;
  ruteEdit!: boolean;
  constructor(private uiServ: UiServiceService) { }

  ngOnInit(): void {
    this.ruteEdit = this.uiServ.ruteEdit
  }


  ngAfterViewInit(): void {
    window.addEventListener('scroll', ()=>{
      this.uiServ.subrayarScroll(this.elementos, 'subrayar .5s linear forwards')
    })
    
  }

  open(){
    this.editar = true;
  }
  oculta(){
    this.editar = false;
  }
}
