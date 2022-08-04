import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEstudio } from 'src/app/interfaces/iestudio';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  @Input() user!: IUser;
  ruteEdit: boolean = false;
  editar!: boolean;
  public estudiosUser!: Array<IEstudio>;
  constructor(private serApi: ApiService,
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
  open(){
    this.editar = true;
  }

  cierre(){
    this.editar = false;
  }

  

}
