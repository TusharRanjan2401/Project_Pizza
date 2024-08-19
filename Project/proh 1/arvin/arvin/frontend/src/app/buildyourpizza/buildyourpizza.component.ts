import { Component } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-buildyourpizza',
  templateUrl: './buildyourpizza.component.html',
  styleUrls: ['./buildyourpizza.component.css']
})
export class BuildyourpizzaComponent {
  constructor(private bs: IngredientsService, private cs: CartserviceService){}
  ingredients :any[]=[];
  totalCost: number = 0;
  selectedIngredients: any[] = [];
  flags: boolean[]=[];
  ngOnInit(){
    this.loadingredients();
  }
  loadingredients(){
    this.bs.getIngredients().subscribe((data)=>{
      this.ingredients = data;
    })
  }
  calculateTotal() {
    this.totalCost = this.ingredients.reduce((total, ingredient) => {
      return total + (ingredient.selected ? ingredient.price : 0);
    }, 0);
  }

  toggleSelection(ingredient: any) {
    if (ingredient.selected) {
      this.selectedIngredients.push(ingredient);
    } else {
      const index = this.selectedIngredients.indexOf(ingredient);
      if (index !== -1) {
        this.selectedIngredients.splice(index, 1);
      }
    }
    this.calculateTotal();
  }

  addIngredientstoCart(selectedIngredients: any[]){
    selectedIngredients.forEach(ingredient => {
      this.cs.addToCart(ingredient.tname, ingredient.price, 1, ingredient.image, 'ingre').subscribe(() => {

      });
    });
    
  } 

}
