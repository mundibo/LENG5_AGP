import { Component, OnInit } from '@angular/core';
import { ColaboradoresService } from '../services/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.page.html',
  styleUrls: ['./colaboradores.page.scss'],
})
export class ColaboradoresPage implements OnInit {

  colaborado = [];
 
  constructor(private colaboradorService : ColaboradoresService) { }
  
  ngOnInit(){
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

}
