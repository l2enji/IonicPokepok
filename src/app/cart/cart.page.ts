import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public product:any=[];    //Définit les produit car je veux ajouter des produit dans la page
  public grandTotal!:number; // le "!" veut dire qu'il est non null
  public orderList:any=[];
  public quant:number=1;
  static quant2: any;

  constructor(private cartService:CartService,) { }

  ngOnInit() :void {
    this.cartService.getProducts()
     // this.orderService.getAllOrders()
      .subscribe(
      res => {
        this.product=res; //Ajoute à la liste des produits, les produits
        this.grandTotal=this.cartService.getTotalPrice();
        //this.orderList=res ;    

      }
    ),
    this.cartService.getProducts().subscribe(
      data =>{
        console.log(data);
        
        this.quant ;
        CartPage.quant2=this.quant
      }
    );
  }

}
