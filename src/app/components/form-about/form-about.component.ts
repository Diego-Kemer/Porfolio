import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/interfaces/iuser';
import { ApiService } from 'src/app/services/api/api.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-form-about',
  templateUrl: './form-about.component.html',
  styleUrls: ['./form-about.component.css']
})
export class FormAboutComponent implements OnInit {
  @Input() user!: IUser;
  @Output() cierre = new EventEmitter<boolean>();
  formAbout!: FormGroup;
  image!: string;
  constructor(private formB: FormBuilder,
              private apiServ: ApiService,
              private storage: Storage) { }

  ngOnInit(): void {
    this.formAbout = this.formB.group({
      idusuario: this.user.idusuario,
      name: this.user.name,
      lastname: this.user.lastname,
      profesion: this.user.profesion,
      edad: this.user.edad,
      nacionalidad: this.user.nacionalidad,
      nivel: this.user.nivel,
      foto_portada: this.image,
      sobre_mi: '',
    })

    this.formAbout.patchValue({
      name: this.user.name,
      lastname: this.user.lastname,
      profesion: this.user.profesion,
      edad: this.user.edad,
      nacionalidad: this.user.nacionalidad,
      nivel: this.user.nivel,
      foto_portada: this.user.foto_portada,
      sobre_mi: this.user.sobre_mi
    })
  }

  uploadImg($event: any){
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `images/${file.name}`)
    uploadBytes(imgRef, file)
    .then(async resp=>{
      const url = await getDownloadURL(resp.ref)
      this.image = url;
      this.formAbout.value.foto_portada = this.image;
    })
    .catch(err=> console.log(err))
  }

  cerrar() {
    this.cierre.emit(false)
  }

  send() {
    this.apiServ.actualizarUser(this.formAbout.value).subscribe(res=>{
      this.apiServ.actualUser.emit()
      this.cierre.emit()
    })

  }

}
