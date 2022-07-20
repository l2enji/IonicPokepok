import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  findAllProducts(){
    return this.http.get("http://localhost:3082/produits");
  }

  saveProduct(product:Product){
    return this.http.post("http://localhost:3082/produits", product);
  }

  deleteProduct(id:number){
    return this.http.delete("http://localhost:3082/produits/delete"+id);
  }
}
