import { Component, OnInit, ViewChild } from '@angular/core';
import { ValoresService } from '../services/valores.service';
import { IonList, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-valores',
  templateUrl: './valores.page.html',
  styleUrls: ['./valores.page.scss'],
})
export class ValoresPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;

  valo = [];
 
  constructor(private valorService : ValoresService, private toastCtrl: ToastController) { }
  
  ngOnInit(){
   this.listValores();
  }

  listValores(){
    this.valorService.listValores().subscribe(data=>{
      console.log(data);
      if(data.success){
        this.valo = data.valores;

      }else{
        this.valo= [];
      }
    });
  }

  borrarvalor(codigo) {
    this.valorService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Valor #' + codigo + ' borrado con exito'
        : ' Error al eliminar, el registro esta siendo utilizado';
      const toast = await this.toastCtrl.create({
        message: 'Valor #' + codigo + ' borrado con exito',
        duration: 2000,
      });
      this.listValores();

      toast.present();

      this.ionList.closeSlidingItems();
   
    });
  }

}
