import { Component } from '@angular/core';
import { PizzadataserviceService } from '../pizzadataservice.service';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent {
  constructor(private ps: PizzadataserviceService, private lp: CartserviceService){}

  pizzadata :any[]=[];
  ngOnInit(){
    this.loadPizzas();
  }

  loadPizzas(){
    this.ps.getpizzas().subscribe((data)=>{
      this.pizzadata = data;
      console.log(this.pizzadata);
    }) 
  }
  
  addtocart(name: string, price: number, quantity: number, image: string, type: string){
    this.lp.addToCart(name,price,quantity, image, type).subscribe(()=>{
      console.log(type);
    })
  }
}
