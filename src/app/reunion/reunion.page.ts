import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ColaboradoresService } from '../services/colaboradores.service';
import { ReunionService } from '../services/reunion.service';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.page.html',
  styleUrls: ['./reunion.page.scss'],
})
export class ReunionPage implements OnInit {

  private codigo;
  registroreunion = this.fb.group({
    colaborador: [''],
    motivo: [''],
    fecha: [new Date().toISOString().slice(0, 16), Validators.required],
  
  }); 

  public colaboradores: any = null;



  constructor(
    private colaboradorService: ColaboradoresService,
    private reunionService : ReunionService,
    private fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    private activateRoute: ActivatedRoute,
   
  ) { }

  ngOnInit() {
    this.ObtenerReunion();
  }




  guardarReunion() {
    const reunion= this.registroreunion.value;
    const reuniones = {
      reu_codigo: this.codigo === '0' ? null : Number(this.codigo),
      reu_codcol: reunion.colaborador,
      reu_motivo: reunion.motivo,
      reu_fecha: reunion.fecha
      
    };
    
    

    this.reunionService.create(reuniones).subscribe(async (data: any) => {
   
      console.log('DATA', reuniones);

      this.router.navigate(['/registrarreunion']);
    });
  }


  
  ObtenerReunion() {

    this.obtenerColaboradores();
    this.codigo = this.activateRoute.snapshot.params.id;

    if (this.codigo !== '0') {
      this.reunionService.getById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registroreunion.setValue({
           colaborador: data.reunion.reu_codcol,
            motivo: data.reunion.reu_motivo,
            fecha: data.reunion.reu_fecha,
          });
       
        }
      });
    }
  }

  private obtenerColaboradores() {
    this.colaboradorService.listColaboradores().subscribe(data => {
      this.colaboradores= data.success ? data.colaboradores : null;
    });
  }


}
