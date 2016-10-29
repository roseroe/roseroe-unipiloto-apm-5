import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product-list.html',
  providers: [ProductService]
})

export class ProductListComponent {

    title: string = "Mis productos";
    products: Product[];
   
    constructor(private productService: ProductService){}
    
    selectedProduct: Product;
    
    ngOnInit(){
        this.productService.getProducts()
        .then(products => this.products = products)
        .catch(error => console.log(error));
    }
    
    onSelectProduct(prod: Product) {
      this.selectedProduct = prod;
    }
}

