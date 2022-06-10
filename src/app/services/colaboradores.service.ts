import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private x = "http://localhost:3000/colaboradores";


  constructor(private http: HttpClient) { }
  
  listColaboradores(): Observable<any>{
    return this.http.get(this.x);
  }

  public getById(codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + codigo);
  }
  
  
  public create(colaborador:any){
    if(colaborador.col_codigo){
      //Actualiza los datos
      return this.http.put(this.x+`/update`,colaborador);
    }else{
    // Crea Registro nuevo
      return this.http.post(this.x+`/create`,colaborador);
    }
  }
  
  
  public delete(codigo:String){
    return this.http.delete(this.x+`/remove/${codigo}`);
    
  }
  public Filter(texto:String){
    return this.http.get(`http://localhost:3000/colaboradores-filter?q=${texto}`);
    
  }


}
