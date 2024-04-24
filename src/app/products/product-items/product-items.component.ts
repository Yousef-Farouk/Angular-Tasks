import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent {
  
  @Input() product: any = {}; 

}
