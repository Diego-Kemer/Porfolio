import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IInstitucion } from 'src/app/interfaces/iinstitucion';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent implements OnInit {
  @Input() user!: any;
  @Input() data!: any;
  @Output() cerrar = new EventEmitter()
  public agrega: boolean = false;
  public instituciones!: Array<IInstitucion>;
  public institucionSelect!: IInstitucion;
  public logo!: string;
  formGroup!: FormGroup;
  form2!: FormGroup;

  constructor(private fBuild: FormBuilder,
              private apiServ: ApiService,
              private storage: Storage) { }

  ngOnInit(): void {
    this.apiServ.traerInstituciones().subscribe(res=>{
      this.instituciones = res
    })
    this.formGroup = this.fBuild.group({
      id: this.data.id,
      titulo: '',
      institucion: {},
      fecha_inicio: '',
      fecha_fin: '',
      modalidad: '',
      usuario: this.user
    })
    this.form2 = this.fBuild.group({
      name: '',
      provincia: '',
      localidad: '',
      logo: ''
    })

    this.formGroup.patchValue({
      titulo: this.data.titulo,
      institucion: this.data.institucion,
      fecha_inicio: this.data.fecha_inicio,
      fecha_fin: this.data.fecha_fin,
      modalidad: this.data.modalidad
    })
  }

  ocultar(){
    this.cerrar.emit()
  }
  ver(item: any){
    this.institucionSelect = JSON.parse(item.target.value) 
  }

  send(){
    if(this.institucionSelect){
      this.formGroup.value.institucion = this.institucionSelect
    }
    this.apiServ.actualizarEstudio(this.formGroup.value).subscribe(res=>{
      this.apiServ.actualUser.emit()
    })
  }

  form(){
    this.agrega = !this.agrega
  }
  cancelar(){
    this.agrega = !this.agrega
  }


  sendIns(){
    console.log(this.form2.value)
    if(this.logo){
      this.form2.value.logo = this.logo
    }
    this.apiServ.crearInstitucion(this.form2.value).subscribe(res=>{
      this.apiServ.traerInstituciones().subscribe(res=>{
        this.instituciones = res;
        this.cancelar()
      })
    })
  }

  uploadImg($event: any){
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `images/${file.name}`)
    uploadBytes(imgRef, file)
    .then(async resp=>{
      console.log(resp)
      const url = await getDownloadURL(resp.ref)
      this.logo = url;
      this.form2.value.logo = this.logo;
    })
    .catch(err=> console.log(err))
  }
}
