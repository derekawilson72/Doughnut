import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Doughnuts, Result, Menu } from './doughnuts';

@Injectable({
  providedIn: 'root'
})
export class DoughnutsService {

  shoppingcart:Doughnuts[] = [];

  constructor(private http:HttpClient) { }

  url1:string = "https://grandcircusco.github.io/demo-apis/donuts.json";

  fetchResults(): Observable<Menu> {
    var response1 =  this.http.get<Menu>(this.url1);

    return response1
  }

  url2:string = "https://grandcircusco.github.io/demo-apis/donuts/";
  
  fetchMenuItem(id:number): Observable<Doughnuts> {
    let url = `${this.url2}${id}.json`
    return this.http.get<Doughnuts>(url);
    
  }

  removeShoppingCartItem(id:number):void {
    console.log("Removing Shopping cart " + id);
    this.shoppingcart.splice(id,1);

  }


  getById(id:number):Doughnuts{
    let index:number = this.shoppingcart.findIndex(s => s.id == id );
    let item = this.shoppingcart[index];
    return item;

  }


  aggregateCartCost():number{
    var n = this.shoppingcart.length;
    var total_cost = 0.0;
    var total_calories = 0.0;
    for (var k=0; k<n; k++) {
      var itemk = this.shoppingcart[k];
      var cost = 1.0;
      var calorie = itemk.calories;
      total_cost = total_cost + cost;
      total_calories = total_calories + calorie;
    }
    var return_string = `Total Cost: ${total_cost} Total calories: ${total_calories}`;
    return  total_cost
  }

  aggregateCartCalories():number{
    var n = this.shoppingcart.length;
    var total_cost = 0.0;
    var total_calories = 0.0;
    for (var k=0; k<n; k++) {
      var itemk = this.shoppingcart[k];
      var cost = 1.0;
      var calorie = itemk.calories;
      total_cost = total_cost + cost;
      total_calories = total_calories + calorie;
    }
    var return_string = `Total Cost: ${total_cost} Total calories: ${total_calories}`;
    return  total_calories
  }


}
