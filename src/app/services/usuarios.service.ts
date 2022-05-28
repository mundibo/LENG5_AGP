import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  token: String = null;
  codigo:String = null;
  
  private x = "http://localhost:3000/usuarios";


  constructor(private http: HttpClient, private storage : Storage, public router: Router) { }
  
  listUsuarios(): Observable<any>{
    return this.http.get(this.x);
  }

  public getById(codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + codigo);
  }
  
  
  public create(usuario:any){
    if(usuario.usu_codigo){
      //Actualiza los datos
      return this.http.put(this.x+`/update`,usuario);
    }else{
    // Crea Registro nuevo
      return this.http.post(this.x+`/create`,usuario);
    }
  }
  
  
  public delete(codigo:String){
    return this.http.delete(this.x+`/remove/${codigo}`);
    
  }

  public login(usu_correo:String, usu_pass:String){
    const data = {usu_correo, usu_pass};
  
    return new Promise(resolve=>{
  
      this.http.post(this.x+`/login`,data).subscribe(resp=>{
        console.log(resp);
     
    
       if(resp['success']){
         this.guardarToken(resp['token']);
         this.guardarId(resp['codigo']);
         resolve(true);
       }else{
         this.token=null;
         this.codigo=null;
         this.storage.clear();
         resolve(false);
       }
    
      });
  
  
  
  
    });
  
  
    }
  
  async guardarToken(usu_token:String){
    this.storage.create();
  this.token = usu_token;
  await this.storage.set('token',usu_token);
  }
  
  async guardarId(usu_codigo:String){
    this.storage.create();
  this.codigo = usu_codigo;
  await this.storage.set('codigo',usu_codigo);
  }


}
