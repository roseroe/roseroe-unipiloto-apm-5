import { Component } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock/product-mock';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product-list.html'
})

export class ProductListComponent {

    title: string = "Mis productos";
    selected: Product;
    products: Product[] = PRODUCTS;

     onSelect(product: Product) {
        this.selected = product;
    }
}