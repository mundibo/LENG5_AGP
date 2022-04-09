import { Component, OnInit } from '@angular/core';
import { ValoresService } from '../services/valores.service';
import { IonList, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-valores',
  templateUrl: './valores.page.html',
  styleUrls: ['./valores.page.scss'],
})
export class ValoresPage implements OnInit {
  valo = [];
 
  constructor(private valorService : ValoresService) { }
  
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


  borrarValor(codigo) {
    this.valorService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
       
    });
  }

  

}
