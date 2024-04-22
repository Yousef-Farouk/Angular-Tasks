import { Component } from '@angular/core';

@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent {

  productStatus : string = ' ';
  products: { id: string; name: string; price: number; Category: string; img: string; quantity: number }[] = [
    {
      id: "1",
      name: "Black Pullover",
      price: 600,
      Category: "clothes",
      img: "https://i.ibb.co/bbWK2rw/men-03.jpg",
      quantity: 5
    },
    {
      id: "2",
      name: "Jeans Jacket",
      price: 550,
      Category: "clothes",
      img: "https://i.ibb.co/mh8YHbC/men-02.jpg",
      quantity: 0
    },
    {
      id: "3",
      name: "Army Jacket",
      price: 650,
      Category: "clothes",
      img: "https://i.ibb.co/7G5xwH4/men-01.jpg",
      quantity: 1
    },
    {
      id: "4",
      name: "Black Shirt",
      price: 700,
      Category: "clothes",
      img: "https://i.ibb.co/QvWZGjz/product-7.jpg",
      quantity: 0
    },
    {
      id: "5",
      name: "Camera",
      price: 7000,
      Category: "electronics",
      img: "https://i.ibb.co/P4XYKv2/product-1.jpg",
      quantity: 0
    },
    {
      id: "6",
      name: "Drone",
      price: 10000,
      Category: "electronics",
      img: "https://i.ibb.co/PGGQtBK/product-5.jpg",
      quantity: 1
    }
  ];


}
