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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var home_component_1 = require("../component/home.component");
var customer_list_component_1 = require("../component/customer-list.component");
var product_detail_component_1 = require("../component/product-detail.component");
var customer_detail_component_1 = require("../component/customer-detail.component");
var sales_invoice_detail_component_1 = require("../component/sales-invoice-detail.component");
var line_item_detail_component_1 = require("../component/line-item-detail.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'lista-clientes', component: customer_list_component_1.CustomerListComponent },
    { path: 'customer/detail/:id', component: customer_detail_component_1.CustomerDetailComponent },
    { path: 'sales_invoice/detail/:id', component: sales_invoice_detail_component_1.SalesInvoiceDetailComponent },
    { path: 'line_item/detail/:id', component: line_item_detail_component_1.LineItemDetailComponent },
    { path: 'product/detail/:id', component: product_detail_component_1.ProductDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map