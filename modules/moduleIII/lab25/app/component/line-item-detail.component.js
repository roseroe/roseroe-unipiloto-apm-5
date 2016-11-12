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
var line_item_service_1 = require("../service/line-item.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var LineItemDetailComponent = (function () {
    function LineItemDetailComponent(lineItemService, route, router) {
        this.lineItemService = lineItemService;
        this.route = route;
        this.router = router;
        this.title = "Products";
    }
    LineItemDetailComponent.prototype.getProducts = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.lineItemService.getProductDetail(id)
                .then(function (products) { return _this.products = products; });
        });
    };
    LineItemDetailComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    LineItemDetailComponent.prototype.onSelectProduct = function (prod) {
        this.selectedProduct = prod;
    };
    LineItemDetailComponent.prototype.gotoDetailProduct = function () {
        this.router.navigate(['product/detail/', this.selectedProduct.id]);
    };
    LineItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'line-item-detail',
            templateUrl: 'app/templates/line-item-detail.html',
            providers: [line_item_service_1.LineItemService]
        }), 
        __metadata('design:paramtypes', [line_item_service_1.LineItemService, router_1.ActivatedRoute, router_2.Router])
    ], LineItemDetailComponent);
    return LineItemDetailComponent;
}());
exports.LineItemDetailComponent = LineItemDetailComponent;
//# sourceMappingURL=line-item-detail.component.js.map