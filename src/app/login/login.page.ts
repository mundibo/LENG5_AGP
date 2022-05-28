import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private codigo;
  login = this.fb.group({
    correo: ['', Validators.required],
    pass: ['', Validators.required],
   
  });

  constructor( private fb: FormBuilder,
    private usuarioService: UsuariosService,
    public router: Router,
    private storage : Storage,
   private  alertController: AlertController) { }

  ngOnInit() {
  }


  async obtenerLogin( ){
    this.storage.create();

    const valido = await this.usuarioService.login(this.login.value.correo,this.login.value.pass);

    if(valido){
      //navegar a pantalla principal
      this.router.navigate(['/inicio']);
      
    }else{
      // alerta

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message:'Datos de usuario o contraseña incorrectos',
        buttons: ['OK']
      });
    
      await alert.present();

    }

  }

}
