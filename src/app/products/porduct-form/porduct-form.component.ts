import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productList } from '../../models/productList';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import {FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ProductApiService } from '../../services/product-api.service';


@Component({
  selector: 'app-porduct-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './porduct-form.component.html',
  styleUrl: './porduct-form.component.css'
})
export class PorductFormComponent implements OnInit {
  
  // name : string  = ''
  // quantity : any  
  // price : any
  //img : string | ArrayBuffer | null = null;

  productForm = new FormGroup({

    name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    quantity : new FormControl(null,[Validators.required]),
    price : new FormControl(null,[Validators.required]),
    img : new FormControl('')

  })

  productId : number = 0 
  product : any

  constructor(
    // public productService : ProductService,
    public router : Router,
    public activatedRoute :ActivatedRoute ,
    public productService : ProductApiService
  ) {}

  


  get getName() {
    return this.productForm.controls['name'];
  }

  get getPrice() {
    return this.productForm.controls['price'];
  }

  get getQuantity() {
    return this.productForm.controls['quantity'];
  }

  get getImage() {
    return this.productForm.controls['img'];
  }


// ngOnInit(): void {
//     this.productId = this.activatedRoute.snapshot.params['id']
//     if (this.productId != 0){
//       this.product = this.productService.getProductByid(this.productId)
//       this.name = this.product.name;
//       this.quantity = this.product.quantity;
//       this.price = this.product.price;
//       this.img = this.product.img
//     }
    
//   }



ngOnInit(): void {

    this.activatedRoute.params.subscribe({
      next:(params)=>{
        this.productId = params['id']
        this.getName.setValue('')
        this.getPrice.setValue(null)
        this.getQuantity.setValue(null)
        this.getImage.setValue(null)
      },
    })  

    if(this.productId != 0){

      this.productService.getProductByid(this.productId).subscribe({

        next:(data)=>{
          this.product = data 
          this.getName.setValue(this.product.name)
          this.getPrice.setValue(this.product.price)
          this.getQuantity.setValue(this.product.quantity)
        }
      })
    }
}





  onFileSelected($event:any){
    const inputElement = $event?.target as HTMLInputElement;
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
        // this.getImage.setValue(reader.result)
        const imgSrc = reader.result as string;
        console.log(imgSrc);
        this.productForm.get('img')?.setValue(imgSrc);
        console.log(this.getImage)
      };
      reader.readAsDataURL(file);
    }
  }


  // addProduct()
  // {
    
  //     let id = productList.length + 1;
  //     let newProduct : Iproduct = {
  //       id : id ,
  //       name : this.name,
  //       quantity:this.quantity,
  //       // img : `../../../assets/imgs/${this.img}` ,
  //       img : this.img,
  //       price : this.price ,
  //       Category:''
  //     }
  //     this.productService.addNewproduct(newProduct);
    
   
  // }

  // editProduct()
  // {
  //   this.product.name = this.name ;
  //   this.product.quantity = this.quantity ;
  //   this.product.price = this.price ;
  //   this.product.img = this.img 
  // }

  // productHandler()
  // {
  //   if(this.productId == 0){

  //     this.addProduct()
  //   }
  //   else {

  //     console.log("editing");
  //     this.editProduct()
  //   }

  //   this.router.navigate(['/products'])
  // }

  productHandler(){

    if(this.productForm.status == 'VALID'){
      if(this.productId == 0){

        this.productService.addNewProduct(this.productForm.value).subscribe({
          next : ()=>{
            this.router.navigate(['/products'])
          },
        })
      }
      else {
        //this.productForm. = this.name ;
        //   this.product.quantity = this.quantity ;
        //   this.product.price = this.price ;
        //   this.product.img = this.img 
        this.productService.editProduct(this.productId,this.productForm.value)
        .subscribe({
          next :()=>{
            this.router.navigate(['/products'])
          }
        })
      }
    }
    else {
      console.log('form invalid');
    }
  }
}
