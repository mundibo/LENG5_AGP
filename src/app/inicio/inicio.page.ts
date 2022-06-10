import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { ReconocimientoService } from '../services/reconocimiento.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  reco = [];
  
  textoBuscar = '';

 
  constructor(private reconocimientoService : ReconocimientoService, private toastCtrl: ToastController) { }
  
  ngOnInit(){
   this.listarReconocimientos();
  }
  ionViewWillEnter() {
    this.listarReconocimientos();
  }

  buscar(event) {
    const valor = event.detail.value;

    this.reconocimientoService.Filter(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.reco = data['reconocimientos'];
      } else {
        this.reco = [];
      }
    });
  }

  listarReconocimientos(){
    this.reconocimientoService.listReconocimientos().subscribe(data=>{
      console.log(data);
      if(data.success){
        this.reco = data.reconocimientos;

      }else{
        this.reco= [];
      }
    });
  }

}
