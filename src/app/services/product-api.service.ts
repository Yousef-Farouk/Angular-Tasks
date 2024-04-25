import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  baseUrl:string = "http://localhost:3000/products"
  constructor(private http:HttpClient) {

  }

  getAllproducts():Observable<Iproduct[]>{

    return this.http.get<Iproduct[]>(this.baseUrl)
  }

  getProductByid(productId :number){

    return this.http.get(`${this.baseUrl}/${productId}`)
  }

  addNewProduct(product :any){

    return this.http.post(`${this.baseUrl}`,product)

  }

  editProduct(productId:number,product:any){

    return this.http.put(`${this.baseUrl}/${productId}`,product)
  }
  
  deleteProduct(productId:number){

    return this.http.delete(`${this.baseUrl}/${productId}`)
  }

}

