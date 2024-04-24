import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { SelectlistComponent } from './selectlist/selectlist.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SliderComponent,ProductsComponent,FooterComponent,FormComponent,SelectlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
  datafromchild : any 

  getData(x:any)
  {
    this.datafromchild = x ;
    console.log("get data");
    console.log(this.datafromchild);
  }
}


