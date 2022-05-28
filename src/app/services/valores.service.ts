import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValoresService {

  private x = "http://localhost:3000/valores";


  constructor(private http: HttpClient) { }
  
  listValores(): Observable<any>{
    return this.http.get(this.x);
  }

  public getById(codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + codigo);
  }
  
  
  public create(valor:any){
    if(valor.val_codigo){
      //Actualiza los datos
      return this.http.put(this.x+`/update`,valor);
    }else{
    // Crea Registro nuevo
      return this.http.post(this.x+`/create`,valor);
    }
  }
  
  
  public delete(codigo:String){
    return this.http.delete(this.x+`/remove/${codigo}`);
    
  }


}
