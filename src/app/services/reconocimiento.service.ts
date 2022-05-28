import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReconocimientoService {

  constructor(private http: HttpClient) { }


  private x = "http://localhost:3000/reconocimiento";

  listReconocimientos(): Observable<any>{
    return this.http.get(this.x);
  }
  public create(reconocimiento:any){
    if(reconocimiento.re_codigo){
      //Actualiza los datos
      return this.http.put(this.x+`/update`,reconocimiento);
    }else{
    // Crea Registro nuevo
      return this.http.post(this.x+`/create`,reconocimiento);
    }
}


public getById(codigo: string): Observable<any> {
  return this.http.get(this.x + `/find/` + codigo);
}


}
