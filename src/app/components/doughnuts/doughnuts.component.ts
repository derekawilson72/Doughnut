import { Component, OnInit } from '@angular/core';
import { Doughnuts, Result, Menu } from 'src/app/doughnuts';
import { DoughnutsService } from 'src/app/doughnuts.service';

@Component({
  selector: 'app-doughnuts',
  templateUrl: './doughnuts.component.html',
  styleUrls: ['./doughnuts.component.css']
})
export class DoughnutsComponent implements OnInit {

  results:Result[] = [];
  
  constructor(private doughnutService:DoughnutsService) { }

  ngOnInit(): void {
    this.results = [];

    //subscribe is asynch
    console.log("Requesting Menu");
    this.doughnutService.fetchResults().subscribe(
      //working call
      (response:Menu) => {
        
        console.log(response);
        let results = response.results;
        var n = results.length;
        this.results = results;

        
      }, 
      //error handling
      (err) =>{
        console.log(err);
      }
    );
     



  }

  addNewShoppingCart(thisdoughnut:Doughnuts):void{
    console.log("Doughnut: " + thisdoughnut.name + " added to cart")
    thisdoughnut.incart = true;

  }

}
