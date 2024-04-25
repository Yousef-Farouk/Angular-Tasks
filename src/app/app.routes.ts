import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { ProductItemsComponent } from './products/product-items/product-items.component';
import { PorductFormComponent } from './products/porduct-form/porduct-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


export const routes: Routes = [

    {path:'' ,component:SliderComponent},
    {path:'products', component:ProductsComponent},
    {path:'products/:id/edit',component:PorductFormComponent},
    {path:'products/:id',component:ProductDetailComponent},
    {path:'**',component:NotFoundComponent}

];
