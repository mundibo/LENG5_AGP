import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.page.html',
  styleUrls: ['./registrarusuario.page.scss'],
})
export class RegistrarusuarioPage implements OnInit {


  private codigo;

  registrousuario = this.fb.group({
    nombre: [''],
    apellido: [''],
    correo: ['', Validators.required],
    pass: ['', Validators.required],
    pass2: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    public router: Router,
    private activateRoute: ActivatedRoute,
    private alertController: AlertController

  ) { }

  ngOnInit() {
    this.listarUsuario();
  }

  async guardarUsuario() {
    const usuario = this.registrousuario.value;

    if (usuario.pass !== usuario.pass2) {
      const alert = await this.alertController.create({
        message: 'Las contraseñas son distintas'
      });
      alert.present();
      return;
    }




    const usuarios = {
      usu_codigo: this.codigo === '0' ? null : Number(this.codigo),
      usu_nombre: usuario.nombre,
      usu_apellido: usuario.apellido,
      usu_correo: usuario.correo,
      usu_pass: usuario.pass
        };
   

    this.usuarioService.create(usuarios).subscribe(async (data: any) => {

      console.log('DATA', usuarios);
      this.router.navigate(['/login']);
    });
  }



  listarUsuario() {
    this.codigo = this.activateRoute.snapshot.params.id;

    if (this.codigo !== '0') {
      this.usuarioService.getById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registrousuario.setValue({
            nombre: data.usuario.usu_nombre,   
            apellido: data.usuario.usu_apellido,
            correo: data.usuario.usu_correo,
            pass: data.usuario.usu_pass,
            pass2: data.usuario.usu_pass2
          });
          console.log(data);
        }
      });
    }
  }
}
