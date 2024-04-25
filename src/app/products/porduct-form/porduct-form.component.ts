import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productList } from '../../models/productList';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-porduct-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './porduct-form.component.html',
  styleUrl: './porduct-form.component.css'
})
export class PorductFormComponent implements OnInit {
  
  name : string  = ''
  quantity : any  
  price : any
  img : string | ArrayBuffer | null = null;

  productId : number = 0 
  product : any

  constructor(
    public productService : ProductService,
    public router : Router,
    public activatedRoute :ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id']
    if (this.productId != 0){
      this.product = this.productService.getProductByid(this.productId)
      this.name = this.product.name;
      this.quantity = this.product.quantity;
      this.price = this.product.price;
      this.img = this.product.img
    }
    
  }

  onFileSelected($event:any){
    const inputElement = event?.target as HTMLInputElement;
    // const file = inputElement.files?.[0];
    // if (file) {
    //   // Extract file name from the path
    //   this.img = file.name;
    //   console.log(this.img);
    // }

    const file = inputElement.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.img = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  addProduct()
  {
    
      let id = productList.length + 1;
      let newProduct : Iproduct = {
        id : id ,
        name : this.name,
        quantity:this.quantity,
        // img : `../../../assets/imgs/${this.img}` ,
        img : this.img,
        price : this.price ,
        Category:''
      }
      this.productService.addNewproduct(newProduct);
    
   
  }

  editProduct()
  {
    this.product.name = this.name ;
    this.product.quantity = this.quantity ;
    this.product.price = this.price ;
    this.product.img = this.img 
  }

  productHandler()
  {
    if(this.productId == 0){

      this.addProduct()
    }
    else {

      this.editProduct()
    }

    this.router.navigate(['/products'])
  }
}
