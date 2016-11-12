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
var customer_service_1 = require("../service/customer.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(customerService, route, router) {
        this.customerService = customerService;
        this.route = route;
        this.router = router;
        this.title = "SalesInvoices";
    }
    CustomerDetailComponent.prototype.getSaleInvoices = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.customerService.getCustomerSalesInvoice(id)
                .then(function (salesInvoices) { return _this.salesInvoices = salesInvoices; });
        });
    };
    CustomerDetailComponent.prototype.ngOnInit = function () {
        this.getSaleInvoices();
    };
    CustomerDetailComponent.prototype.onSelectSaleInvoice = function (salinvo) {
        this.selectedSalesInvoice = salinvo;
    };
    CustomerDetailComponent.prototype.gotoDetailInvoice = function () {
        this.router.navigate(['sales_invoice/detail/', this.selectedSalesInvoice.id]);
    };
    CustomerDetailComponent = __decorate([
        core_1.Component({
            selector: 'customer-detail',
            templateUrl: 'app/templates/customer-detail.html',
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService, router_1.ActivatedRoute, router_2.Router])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customer-detail.component.js.map