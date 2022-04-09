import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValoresService {

  private x = "http://localhost:3000/valores";

 private y="http://localhost:3000";
  constructor(private http: HttpClient) { }
  
  listValores(): Observable<any>{
    return this.http.get(this.x);
  }

  
public delete(codigo: String) {
  return this.http.delete(this.y + `/estado/remove/${codigo}`);
}

}
