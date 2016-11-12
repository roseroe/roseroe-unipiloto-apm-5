"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require("../service/product.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.title = "Producto";
    }
    ProductDetailComponent.prototype.getDetailProduct = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.productService.getProduct(id)
                .subscribe(function (product) { return _this.product = product; });
        });
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getDetailProduct();
    };
    ProductDetailComponent.prototype.save = function () {
        var _this = this;
        this.productService.update(this.product)
            .subscribe(function (response) { console.log(response); _this.router.navigate(['product/']); }, function (err) { console.log(err); });
    };
    ProductDetailComponent.prototype.delete = function () {
        var _this = this;
        this.productService.delete(this.product)
            .subscribe(function (response) { console.log(response); _this.router.navigate(['product/']); }, function (err) { console.log(err); });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-detail',
            templateUrl: 'app/templates/product-detail.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute, router_2.Router])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map