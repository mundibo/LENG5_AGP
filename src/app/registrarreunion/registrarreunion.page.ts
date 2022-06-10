import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController, AlertController } from '@ionic/angular';
import { ReunionService } from '../services/reunion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarreunion',
  templateUrl: './registrarreunion.page.html',
  styleUrls: ['./registrarreunion.page.scss'],
})
export class RegistrarreunionPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  reuniones= [];


  constructor(
    private reunionService: ReunionService,
    private toastCtrl: ToastController,
    public router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.listar();
  }

  ionViewWillEnter() {
    this.listar();
  }
  buscar(event) {
    const valor = event.detail.value;

    this.reunionService.Filter(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.reuniones = data['reuniones'];
      } else {
        this.reuniones = [];
      }
    });
  }

  listar() {
    this.reunionService.list().subscribe((data) => {
      if (data.success) {
        this.reuniones = data.reuniones;
      } else {
        this.reuniones= [];
      }
      console.log(data)
    });
  }
  eliminar(reu_codigo) {
    this.reunionService.delete(reu_codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Reunion #' + reu_codigo + ' borrada correctamente'
        : ' Error al eliminar, el registro esta siendo utilizado';
      const toast = await this.toastCtrl.create({
        message: 'Reunion #' + reu_codigo + ' borrada correctamente',
        duration: 2000,
      });
      this.listar();

      toast.present();

      this.ionList.closeSlidingItems();
   
    });
  }



}
