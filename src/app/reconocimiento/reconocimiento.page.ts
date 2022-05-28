import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReconocimientoService } from '../services/reconocimiento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ColaboradoresService } from '../services/colaboradores.service';
import { ValoresService } from '../services/valores.service';

@Component({
  selector: 'app-reconocimiento',
  templateUrl: './reconocimiento.page.html',
  styleUrls: ['./reconocimiento.page.scss'],
})
export class ReconocimientoPage implements OnInit {

  private codigo;

  registroreconomiento = this.fb.group({
    colaborador: [''],
    valor: [''],
    mensaje: ['']
  });

  public colaboradores: any = null;
  public valores: any = null;


  constructor(
    private fb: FormBuilder,
    private reconocimientoService: ReconocimientoService,
    public router: Router,
    private activateRoute: ActivatedRoute,
    private colaboradorService : ColaboradoresService,
    private valoresService : ValoresService
  ) { }

  ngOnInit() {
    this.listarReconocimiento() ;
  }

  guardarReconocimiento() {
    const reconocimiento = this.registroreconomiento.value;
    const reconocimientos = {
      re_codigo: this.codigo === '0' ? null : Number(this.codigo),
      re_codcol :  reconocimiento.colaborador,
      re_codval: reconocimiento.valor,
      re_mensaje: reconocimiento.mensaje
     
    };

    this.reconocimientoService.create(reconocimientos).subscribe(async (data: any) => {

      console.log('DATA', reconocimientos);
      this.router.navigate(['/inicio']);
    });
  }

  listarReconocimiento() {

    this.obtenerColaboradores();
    this.obtenerValores();

    this.codigo = this.activateRoute.snapshot.params.id;

    if (this.codigo !== '0') {
      this.reconocimientoService.getById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registroreconomiento.setValue({

            colaborador: data.reconocimiento.re_codcol,
            valor: data.reconocimiento.re_codval,
            mensaje : data.reconocimiento.re_mensaje
          });
          console.log(data);
        }
      });
    }
  }

  private obtenerColaboradores() {
    this.colaboradorService.listColaboradores().subscribe(data => {
      this.colaboradores= data.success ? data.colaboradores : null;
    });
  }

  private obtenerValores() {
    this.valoresService.listValores().subscribe(data => {
      this.valores= data.success ? data.valores : null;
    });
  }
}

