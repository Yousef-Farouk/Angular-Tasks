import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductItemsComponent } from './../product-items/product-items.component';
import { Component ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

@Input() product : any

productId : number = 0 

constructor(
  public productService : ProductService ,
  public router:Router,
  public activatedRoute : ActivatedRoute
) {
  
}

ngOnInit(): void {
  
  this.productId = this.activatedRoute.snapshot.params['id'];
  this.product = this.productService.getProductByid(this.productId)
}

backToProducts() {
  this.router.navigate(['/products']);
}
}
