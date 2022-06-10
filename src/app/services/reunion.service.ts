import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  private x = "http://localhost:3000/reuniones";


  constructor(private http: HttpClient) { }
  
  
  
  public list(): Observable<any> {
    return this.http.get(this.x);
  }
  
  public getById(reu_codigo: string): Observable<any> {
    return this.http.get(this.x + `/find/` + reu_codigo);
  }
  
  
  public create(reunion:any){
    if(reunion.reu_codigo){
      return this.http.put(this.x+`/update`,reunion);
    }else{
   
      return this.http.post(this.x+`/create`,reunion);
    }
  }
  
  public delete(reu_codigo: String) {
    return this.http.delete(this.x + `/remove/${reu_codigo}`);
  }

  public Filter(texto:String){
    return this.http.get(`http://localhost:3000/reuniones-filter?q=${texto}`);
    
  }
  
}
