import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Storage, ref, getDownloadURL, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProyecto } from 'src/app/interfaces/iproyecto';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {
  @Input() proyecto!: IProyecto;
  @Input() user!: IUser;
  @Output() apaga: EventEmitter<any> = new EventEmitter();
  formProy!: FormGroup;
  imgage1!: string;
  imgage2!: string;
  imgage3!: string;
  constructor(private formB: FormBuilder,
              private storage: Storage,
              private apiServ: ApiService) { }

  ngOnInit(): void {
    this.formProy = this.formB.group({
      id: Number,
      descrption: '', 
      foto_dos: this.imgage3,
      foto_portada: this.imgage1,
      foto_uno: this.imgage2,
      name: '',
      usuario: this.user,
      url: '',
      git_hub: ''
    })

    if(this.proyecto){
      this.imgage3 = this.proyecto.foto_dos;
      this.imgage1 = this.proyecto.foto_portada;
      this.imgage2 = this.proyecto.foto_uno;
      this.formProy.patchValue({
        descrption: this.proyecto.descrption, 
        foto_dos: this.proyecto.foto_dos,
        foto_portada: this.proyecto.foto_portada,
        foto_uno: this.proyecto.foto_uno,
        name: this.proyecto.name,
        url: this.proyecto.url,
      git_hub: this.proyecto.git_hub
      })
    }
    
  }


  uploadImg($event: any, atr: number){
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `images/proyectos/${file.name}`)
    uploadBytes(imgRef, file)
    .then(async resp=>{
      console.log(resp)
      const url = await getDownloadURL(resp.ref)
      if(atr == 1){
        this.imgage1 = url
        this.formProy.value.foto_portada = this.imgage1
      }
      if(atr == 2){
        this.imgage2 = url
        this.formProy.value.foto_uno = this.imgage2
      }
      if(atr == 3){
        this.imgage3 = url
        this.formProy.value.foto_dos = this.imgage3
      }
    })
    .catch(err=>console.log(err))
  }

  apagar(){
    this.apaga.emit()
  }

  sendEdit(){
    this.formProy.value.foto_dos = this.imgage3;
    this.formProy.value.foto_portada = this.imgage1;
    this.formProy.value.foto_uno = this.imgage2;
    this.formProy.value.id = this.proyecto.id
    console.log(this.formProy.value)
    this.apiServ.actualizarProyecto(this.formProy.value).subscribe(res=>{
      this.apiServ.actualUser.emit()
      this.apagar()
    })
  }

  sendCrear(){
    this.formProy.value.foto_dos = this.imgage3;
    this.formProy.value.foto_portada = this.imgage1;
    this.formProy.value.foto_uno = this.imgage2;
    this.apiServ.crearProyecto(this.formProy.value).subscribe(res=>{
      this.apiServ.actualUser.emit()
      this.apagar()
    })
  }
}
