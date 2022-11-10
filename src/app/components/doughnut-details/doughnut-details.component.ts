import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doughnuts } from 'src/app/doughnuts';
import { DoughnutsService } from 'src/app/doughnuts.service';
import { Shoppingcart } from '../../models/shoppingcart';


@Component({
  selector: 'app-doughnut-details',
  templateUrl: './doughnut-details.component.html',
  styleUrls: ['./doughnut-details.component.css']
})
export class DoughnutDetailsComponent implements OnInit {


  displayDoughnut:Doughnuts = {} as Doughnuts;
  shoppingcart:Shoppingcart[] = [];


  constructor(
    private doughnutservice:DoughnutsService,
    private route:ActivatedRoute
    ) 
    { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    console.log("route id is " + id);
    //this.displayDoughnut = this.doughnutservice.getById(id);

    this.doughnutservice.fetchMenuItem(id).subscribe(
        (response2:Doughnuts) => {
          console.log(response2);
          let doughnut = response2;
          doughnut.incart = false;
          let name = doughnut.name;
          console.log("Adding doughnut: " + name);
          this.displayDoughnut = doughnut;
        },
        (err) =>{
          console.log(err);
        }
      );

    }    
  

  addNewShoppingCart(thisdoughnut:Doughnuts):void{
    console.log("Doughnut: " + thisdoughnut.name + " added to cart")
    this.doughnutservice.shoppingcart.push(thisdoughnut);
  }

  

}
