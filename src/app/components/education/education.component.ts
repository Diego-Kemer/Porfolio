import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
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
  editar: boolean = false;
  public estudiosUser!: Array<IEstudio>;
  constructor(private serApi: ApiService) { }

  ngOnInit(): void {
    
    
  }
  open(){
    this.editar = true;
  }

  cierre(){
    this.editar = false;
  }

  

}
