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
var sales_invoice_service_1 = require("../service/sales-invoice.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var SalesInvoiceDetailComponent = (function () {
    function SalesInvoiceDetailComponent(salesInvoiceService, route, router) {
        this.salesInvoiceService = salesInvoiceService;
        this.route = route;
        this.router = router;
        this.title = "LineItems";
    }
    SalesInvoiceDetailComponent.prototype.getLineItems = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.salesInvoiceService.getLineItemDetail(id)
                .then(function (lineItems) { return _this.lineItems = lineItems; });
        });
    };
    SalesInvoiceDetailComponent.prototype.ngOnInit = function () {
        this.getLineItems();
    };
    SalesInvoiceDetailComponent.prototype.onSelectLineItem = function (line) {
        this.selectedLineItem = line;
    };
    SalesInvoiceDetailComponent.prototype.gotoDetailLineItem = function () {
        this.router.navigate(['line_item/detail/', this.selectedLineItem.lineNumber]);
    };
    SalesInvoiceDetailComponent = __decorate([
        core_1.Component({
            selector: 'sales-invoice-detail',
            templateUrl: 'app/templates/sales-invoice-detail.html',
            providers: [sales_invoice_service_1.SalesInvoiceService]
        }), 
        __metadata('design:paramtypes', [sales_invoice_service_1.SalesInvoiceService, router_1.ActivatedRoute, router_2.Router])
    ], SalesInvoiceDetailComponent);
    return SalesInvoiceDetailComponent;
}());
exports.SalesInvoiceDetailComponent = SalesInvoiceDetailComponent;
//# sourceMappingURL=sales-invoice-detail.component.js.map