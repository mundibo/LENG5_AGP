import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradoresService } from '../services/colaboradores.service';

@Component({
  selector: 'app-registrarcolaborador',
  templateUrl: './registrarcolaborador.page.html',
  styleUrls: ['./registrarcolaborador.page.scss'],
})
export class RegistrarcolaboradorPage implements OnInit {


  private codigo;

  registrocolaborador = this.fb.group({
    nombre_apellido: ['', Validators.required],
    correo: [''],
    ci: [''],
    telefono: [''],
    genero: [],
    sector: [' '],
  });

  constructor(
    private fb: FormBuilder,
    private colaboradorService: ColaboradoresService,
    public router: Router,
    private activateRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.listarColaborador();
  }

  guardarColaborador() {
    const colaborador = this.registrocolaborador.value;
    const colaboradores = {
      col_codigo: this.codigo === '0' ? null : Number(this.codigo),
      col_nombre_apellido: colaborador.nombre_apellido,
      col_correo: colaborador.correo,
      col_ci: colaborador.ci,
      col_telefono: colaborador.telefono,
      col_genero: colaborador.genero,
      col_sector: colaborador.sector
    };
   

    this.colaboradorService.create(colaboradores).subscribe(async (data: any) => {

      console.log('DATA', colaboradores);
      this.router.navigate(['/colaboradores']);
    });
  }



  listarColaborador() {
    this.codigo = this.activateRoute.snapshot.params.id;

    if (this.codigo !== '0') {
      this.colaboradorService.getById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registrocolaborador.setValue({
            nombre_apellido: data.colaborador.col_nombre_apellido,
            correo: data.colaborador.col_correo,
            ci: data.colaborador.col_ci,
            telefono: data.colaborador.col_telefono,
            genero: data.colaborador.col_genero,
            sector: data.colaborador.col_sector

          });
          console.log(data);
        }
      });
    }
  }
}
