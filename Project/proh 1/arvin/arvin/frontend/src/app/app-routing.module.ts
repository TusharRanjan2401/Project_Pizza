import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { BuildyourpizzaComponent } from './buildyourpizza/buildyourpizza.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'orderpizza', component: OrderpizzaComponent },
  { path: 'buildyourpizza', component: BuildyourpizzaComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },

  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
