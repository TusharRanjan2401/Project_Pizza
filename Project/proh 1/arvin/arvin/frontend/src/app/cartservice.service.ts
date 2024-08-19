import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  toppingtotal:number=0;

  constructor(private http: HttpClient) { }

  getCartItems(){
    return this.http.get<any[]>(`http://localhost:3000/test/cart`)
  }

  addToCart(name: string, price: number, quantity: number, image: string, type: string) {
     const item = { name, price, quantity,image,type };
    return this.http.post<any[]>(`http://localhost:3000/test/atc`, item);
  }

  deleteCartItem(name: string){
    return this.http.delete(`http://localhost:3000/test/cd/${name}`);

  }
  
}