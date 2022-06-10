import { Component, OnInit, ViewChild } from '@angular/core';
import { ColaboradoresService } from '../services/colaboradores.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.page.html',
  styleUrls: ['./colaboradores.page.scss'],
})
export class ColaboradoresPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;

  colaborado = [];
 
  constructor(private colaboradorService : ColaboradoresService,   private toastCtrl: ToastController) { }
  
  ngOnInit(){
   this.listarColaboradores();
  }

  
  buscar(event) {
    const valor = event.detail.value;

    this.colaboradorService.Filter(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.colaborado = data['colaboradores'];
      } else {
        this.colaborado = [];
      }
    });
  }
  ionViewWillEnter() {
    this.listarColaboradores();
  }

  listarColaboradores(){
    this.colaboradorService.listColaboradores().subscribe(data=>{
      console.log(data);
      if(data.success){
        this.colaborado = data.colaboradores;

      }else{
        this.colaborado= [];
      }
    });
  }

  borrarcolaborador(codigo) {
    this.colaboradorService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Colaborador #' + codigo + ' borrado con exito'
        : ' Error al eliminar, el registro esta siendo utilizado';
      const toast = await this.toastCtrl.create({
        message: 'Colaborador #' + codigo + ' borrado con exito',
        duration: 2000,
      });
      this.listarColaboradores();

      toast.present();

      this.ionList.closeSlidingItems();
   
    });
  }


}
