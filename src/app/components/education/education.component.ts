import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IEstudio } from 'src/app/interfaces/iestudio';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  @Input() estudios!: Array<IEstudio>;
  public estudiosUser!: Array<IEstudio>;
  constructor(private serApi: ApiService) { }

  ngOnInit(): void {
    this.serApi.traerEstudio().subscribe(res=>{
      console.log(res)
    })
    
  }

  

}
