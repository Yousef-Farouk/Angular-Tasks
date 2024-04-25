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
export class ProductsComponent {

  products : Iproduct[] ;

  constructor(  
    public productservice : ProductService,
    public router : Router,
    public ActivatedRoute:ActivatedRoute,
    ) {
        this.products = this.productservice.getAllproducts()
    }

  // ngOnInit(): void {
  //   this.products = this.productservice.getAllproducts()
  //this.products =productItemsComponent.products

  // }


}
