import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValoresService } from '../services/valores.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-registrarvalor',
  templateUrl: './registrarvalor.page.html',
  styleUrls: ['./registrarvalor.page.scss'],
})
export class RegistrarvalorPage implements OnInit {

  private codigo;

  registrovalor = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: [''],
   
  });

  constructor(
    private fb: FormBuilder,
    private  valorService: ValoresService,
    public router: Router,
    private activateRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.listarvalor();
  }

  guardarValor() {
    const valor = this.registrovalor.value;
    const valores = {
      val_codigo: this.codigo === '0' ? null : Number(this.codigo),
      val_nombre: valor.nombre,
      val_descripcion: valor.descripcion
     
    };
   

    this.valorService.create(valores).subscribe(async (data: any) => {

      console.log('DATA', valores);
      this.router.navigate(['/valores']);
    });
  }



  listarvalor() {
    this.codigo = this.activateRoute.snapshot.params.id;

    if (this.codigo !== '0') {
      this.valorService.getById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registrovalor.setValue({
            nombre: data.valor.val_nombre,
            descripcion: data.valor.val_descripcion
            
          });
          console.log(data);
        }
      });
    }
  }
}
