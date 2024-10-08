import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http: HttpClient) { }

  getIngredients(){
    return this.http.get<any[]>(`http://localhost:3000/test/ingredients`);
  }
}
