import { Component, OnInit } from '@angular/core';
import { Doughnuts } from 'src/app/doughnuts';
import { DoughnutsService } from 'src/app/doughnuts.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  shoppingcart:Doughnuts[] = [];

  constructor(private doughnutService:DoughnutsService) { }

  ngOnInit(): void {
    this.shoppingcart = this.doughnutService.shoppingcart;
  }

  deleteFromCart(id:number):void{
    console.log("Doughnut: " + id + " removed from cart")
    this.doughnutService.removeShoppingCartItem(id);

  }

  shoppingTotalCost():number{
    var total = this.doughnutService.aggregateCartCost();
    return total
  }

  shoppingTotalCalories():number{
    var total = this.doughnutService.aggregateCartCalories();
    return total

  }

}
