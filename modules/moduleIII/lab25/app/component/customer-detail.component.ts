import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { SalesInvoice } from '../model/sales-invoice';
import { CustomerService } from "../service/customer.service";
import { SalesInvoiceService } from "../service/sales-invoice.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
	selector:'customer-detail',
	templateUrl: 'app/templates/customer-detail.html',
	providers: [CustomerService, SalesInvoiceService]
})

export class CustomerDetailComponent implements OnInit {
	
    customer: Customer;
    saleInvoice: SalesInvoice;
    salesInvoices: SalesInvoice[];
    selected: Customer;
    selectedSalesInvoice: SalesInvoice;

    constructor(private customerService: CustomerService, private salesInvoiceService: SalesInvoiceService, private route: ActivatedRoute, private router: Router) {}

    getSaleInvoices() {
        this.salesInvoiceService.getSalesInvoice(0).then(saleInvoices => this.saleInvoice = saleInvoices);
    }

    ngOnInit(){
         this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.customerService.getCustomer(id)
                .then(customer => this.customer = customer);
        });
    }

    onSelectInvoice(salinvo: SalesInvoice) {
      this.selectedSalesInvoice = salinvo;
    }

    gotoDetailInvoice(): void {
        //this.router.navigate(['sales_invoice/detail/', this.selectedSalesInvoice.id]);
    }
}