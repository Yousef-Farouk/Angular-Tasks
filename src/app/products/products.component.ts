import { Component } from '@angular/core';
import { ProductItemsComponent } from './product-items/product-items.component';
import { Iproduct } from '../models/iproduct';
import { productList} from '../models/productList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemsComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products : Iproduct[] = []

  constructor() {
    this.products = productList  
  }
}
