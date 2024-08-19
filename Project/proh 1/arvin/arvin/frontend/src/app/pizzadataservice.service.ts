import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzadataserviceService {

  constructor(private http:HttpClient) { }

  getpizzas(){
    return this.http.get<any[]>(`http://localhost:3000/test/plist`);
  }
}
