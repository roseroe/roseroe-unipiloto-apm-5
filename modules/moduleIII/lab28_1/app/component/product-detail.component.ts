import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html',
    providers: [ProductService]
})

export class ProductDetailComponent implements OnInit {
    title: string = "Producto";
    product: Product;
    constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

    getDetailProduct() {
        this.route.params.forEach((params: Params) => {
            let id =+ params['id'];
            this.productService.getProduct(id)
            .subscribe(product => this.product = product);
        });
    }

    ngOnInit(){
        this.getDetailProduct(); 
    }

    save(): void {
        this.productService.update(this.product)
            .subscribe(
                response => {console.log(response); this.router.navigate(['product/'])},
                err => { console.log(err)});
    }

    delete(): void {
        this.productService.delete(this.product)
        .subscribe(
                response => {console.log(response); this.router.navigate(['product/'])},
                err => { console.log(err)});           
    }
}

