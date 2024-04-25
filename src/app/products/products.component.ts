import { ProductApiService } from './../services/product-api.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductItemsComponent } from './product-items/product-items.component';
import { Iproduct } from '../models/iproduct';
import { productList} from '../models/productList';
import { CommonModule } from '@angular/common';
import { Router,RouterLink,RouterLinkActive,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemsComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products : Iproduct[] ;

  deletedId : number = 0 ; 

  constructor(  
    // public productservice : ProductService,
    public router : Router,
    public ActivatedRoute:ActivatedRoute,
    public productservice : ProductApiService
    ) {
        //this.products = this.productservice.getAllproducts()
         this.products = []  
    }

  ngOnInit(): void {

  //  this.products=this.productservice.getAllproducts()

    this.productservice.getAllproducts().subscribe({

      next:(data)=>{
       this.products = data
      },

      error:(error)=>{
         console.log(error);
      }

    })  
  }

  getData(x:any){

    console.log("recieved id");
    this.deletedId = x ;

    if (this.deletedId != 0 )
    {
        this.products = this.products.filter((product)=>product.id != this.deletedId)
    }

  }


}
