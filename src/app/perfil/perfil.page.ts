import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Platform, ToastController } from '@ionic/angular';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem} from '@capacitor/filesystem';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public foto: any ='https://cdn-icons-png.flaticon.com/512/4128/4128176.png';
 
  private usu_img : String;
  
  private codigo;
  
  
    registro = this.formBuilder.group({
    correo: [''],
    nombre: ['', Validators.required],
    apellido: [''],
    imagen : ['']
  });


  constructor(
    private sanitizer: DomSanitizer,
    private activateRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private router: Router,
    private platform: Platform,
    private storage :Storage,
  ) { }

  ngOnInit() {
    this.listar() ;
  }

  guardar(){ 
    const usuario = this.registro.value;
    const usuarios = {
      usu_codigo: this.codigo === '0' ? null : Number(this.codigo),
      usu_correo: usuario.correo,
      usu_nombre: usuario.nombre,
      usu_apellido: usuario.apellido,
      usu_imagen : this.usu_img
    };
  

    this.usuariosService.create(usuarios).subscribe(async (data: any) => {
      const message = data.success
        ? 'Guardado con exito'
        : ' Error al guardar';
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
      });

      toast.present();

    });
  }


  logout(){
    this.usuariosService.logout();
  }


  async listar() {
    this.storage.create();

    this.codigo = await this.storage.get("codigo");

    if (this.codigo !== '0') {
      this.usuariosService.getById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registro.setValue({
          correo: data.usuario.usu_correo,
            nombre: data.usuario.usu_nombre,
            apellido: data.usuario.usu_apellido,
            imagen: data.usuario.usu_imagen,
          });
          this.foto = data.usuario.usu_imagen;
        }
      });
    }
  }

  async getPicture() {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos 
    });
    this.foto = image.webPath;
    console.log('image:',image);
    if (image) {
        const base64Data = await this.readAsBase64(image);
        this.usu_img= base64Data;
    }

  }


  private async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });

      return file.data;
    } else {
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  extraerBase64 = async ($event: any) =>
  new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result,
        });
      };
      reader.onerror = (error) => {
        resolve({
          base: null,
        });
      };
    } catch (e) {
      return null;
    }
  });
}
function usu_codigo(arg0: string, usu_codigo: any) {
  throw new Error('Function not implemented.');
}


