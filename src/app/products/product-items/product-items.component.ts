import { ProductApiService } from './../../services/product-api.service';
import { productList } from './../../models/productList';
import { Router, ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent implements OnInit {
  
  @Input() product: any = {}; 

  @Output() idContent = new EventEmitter();

  products : Iproduct[]
  productId : number = 0

  

  constructor(
    // public productservice: ProductService,
    public router : Router,
    public ActivatedRoute :ActivatedRoute,
    public productservice : ProductApiService
  ) {
      this.products = []
  }

  ngOnInit(): void {
   
    this.productservice.getAllproducts().subscribe({

      next:(data)=>{
       this.products = data
       
      },

      error:(error)=>{
         console.log(error);
      }

    })  
    
  }

  // delete(id : number){

  //   this.products = this.productservice.deleteProduct(id)
  //   this.router.navigate(['/products'])
  //   console.log(this.products);
  // }


  delete(productId: number) {
    this.productservice.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );
        this.idContent.emit(productId)
        console.log("sent id emitted" , productId);

      },
      error: () => {},
    });
  }
}