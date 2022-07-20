import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  productsList:any;
  constructor(private productService:ProductService, private cartService:CartService) { }

  ngOnInit() {
    this.productService.findAllProducts().subscribe(
      data=>{
        console.log(data);
        this.productsList=data;
        
      }
    )
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}
