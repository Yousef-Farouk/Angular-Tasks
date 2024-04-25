import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productList } from '../models/productList';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Iproduct[] = []
  constructor() { 

    this.products = productList ;
  }

  getAllproducts():Iproduct[]{
    return this.products ;
  }

  getProductByid(productId:number):Iproduct|undefined{

    return this.products.find((product) => product.id == productId)
  }

  addNewproduct(product : Iproduct)
  {
    this.products.push(product);
    return this.products;
  }

  deleteProduct(productId : number)
  {
    this.products = this.products.filter((product)=> productId != product.id)
    return this.products
  }

  editProduct(productId:string )
  {
    
  }
}
