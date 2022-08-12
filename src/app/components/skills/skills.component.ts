import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('hr') elementos!: QueryList<any>;
  constructor(private uiServ: UiServiceService) { }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', ()=>{
      this.uiServ.subrayarScroll(this.elementos, 'subrayar .5s linear forwards')
    })
    
  }

}
