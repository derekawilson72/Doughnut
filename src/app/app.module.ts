import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoughnutsComponent } from './components/doughnuts/doughnuts.component';
import { DoughnutDetailsComponent } from './components/doughnut-details/doughnut-details.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';

const appRoutes:Routes = [
  { path:'shoppingcart', component:ShoppingCartListComponent},
  { path:'doughnuts', component: DoughnutsComponent},
  { path:'doughnuts/:id', component: DoughnutDetailsComponent},
  { path:'', redirectTo: '/doughnuts', pathMatch: 'full'},
];



@NgModule({
  declarations: [
    AppComponent,
    DoughnutsComponent,
    DoughnutDetailsComponent,
    ShoppingCartItemComponent,
    ShoppingCartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
