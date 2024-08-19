import { Component } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {
constructor(private gc: CartserviceService){}

ngOnInit(){
  this.loadCart();

}
cartdata: any[]=[];
total = 0;
toppingtotal = 0;
loadCart(){
  this.gc.getCartItems().subscribe((data)=>{
    this.cartdata = data;
    this.cartdata.forEach(item => {
      this.updateCartItem(item);
    });
    console.log(this.cartdata);
  })
}

increaseQuantity(item: any) {
  item.quantity++;
  this.updateCartItem(item);
}

decreaseQuantity(item: any) {
  if (item.quantity >= 1) {
      item.quantity--;
      this.updateCartItem(item);
      if(!item.quantity){
        this.deleteCartItem(item);
      }
  }
}

updateCartItem(item: any) {
  if (item.type === "ingre") {
    this.toppingtotal = this.cartdata.filter(cartItem => cartItem.type === "ingre").reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  } else {
    this.total = this.cartdata.filter(cartItem => cartItem.type !== "ingre").reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  }
}

deleteCartItem(item: any) {
  console.log(item);
  this.gc.deleteCartItem(item.name).subscribe((data)=>{
    console.log("Item Deleted Successfully");
    item.quantity = 0; // Reset quantity to 0 after deletion
    this.updateCartItem(item); // Recalculate totals after deletion
  });
}

}
