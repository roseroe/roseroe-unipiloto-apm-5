import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from "../../providers/product-service";
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';

/*
  Generated class for the PageProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-product',
  templateUrl: 'page-product.html',
  providers: [ProductService]
})
export class PageProduct {

  	title: string = "los productos del Año";
    selected: Product;
    products: Product[];

    constructor(public navCtrl: NavController, public productService: ProductService, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {

    }
    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.getProducts();
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },

            error => {
                console.log(error);
            }
        );
    }

     onSelect(product: Product){
        this.selected = product;
        let loading = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 60000,
          dismissOnPageChange: true
      });
        this.gotoDetail(product);
        loading.present();
    }

     gotoDetail(product: Product)
    {
       this.navCtrl.push(ProductDetailPage, {
            id: product.id
          });
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.productService.create(name)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            });
        this.getProducts();   
    }
   
  	ionViewDidLoad() {
    	console.log('Hello PageProduct Page');
    	this.getProducts();
  	}

    dismiss() {
    this.viewCtrl.dismiss();
  }

}
