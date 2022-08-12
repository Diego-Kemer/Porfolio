import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IProyecto } from 'src/app/interfaces/iproyecto';
import { IUser } from 'src/app/interfaces/iuser';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit, AfterViewInit {
  @ViewChildren('hr') elementos!: QueryList<any>;
  @Input() user!: IUser;
  edit: boolean = false;
  crear: boolean = false;
  ruteEdit!: boolean;
  proyecto!: IProyecto;
  constructor(private uiServ: UiServiceService) { }

  ngOnInit(): void {
    this.uiServ.editamos.subscribe(res =>{
      this.proyecto = res;
      this.edit = true
    })
    this.ruteEdit = this.uiServ.ruteEdit
  }
  ngAfterViewInit(): void {
    window.addEventListener('scroll', ()=>{
      this.uiServ.subrayarScroll(this.elementos, 'subrayar .5s linear forwards')
    })
    
  }

  off(){
    this.edit = false
  }
  apaga(){
    this.crear = false
  }
  open(){
    this.crear = true;
  }
  


  datosEditar(){

  }
}
