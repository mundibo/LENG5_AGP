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


}
