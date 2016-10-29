import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product-list.html',
  providers: [ProductService]
})

export class ProductListComponent {

    title: string = "Mis productos";
    products: Product[];     
    selectedProduct: Product;
    
    constructor(private router: Router, private productService: ProductService) {

    }

    getProducts() {
        this.productService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selectedProduct = product;
    }

    gotoDetail(): void {
        this.router.navigate(['product/detail/', this.selectedProduct.id]);
    }
}


