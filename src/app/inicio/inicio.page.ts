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
 
  constructor(private reconocimientoService : ReconocimientoService, private toastCtrl: ToastController) { }
  
  ngOnInit(){
   this.listarReconocimientos();
  }
  ionViewWillEnter() {
    this.listarReconocimientos();
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
