import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { LineItemService } from "../service/line-item.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
	selector:'line-item-detail',
	templateUrl: 'app/templates/line-item-detail.html',
	providers: [LineItemService]
})

export class LineItemDetailComponent implements OnInit {
	
    products: Product[];
    selectedProduct: Product;
    title: string = "Products";

    constructor(private lineItemService: LineItemService, private route: ActivatedRoute, private router: Router) {}
    
    getProducts() {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.lineItemService.getProductDetail(id)
                .then(products => this.products = products);
        });
    }

    ngOnInit(){
        this.getProducts(); 
    }

    onSelectProduct(prod: Product) {
      this.selectedProduct = prod;
    }

    gotoDetailProduct(): void {
        this.router.navigate(['product/detail/', this.selectedProduct.id]);
    }
}