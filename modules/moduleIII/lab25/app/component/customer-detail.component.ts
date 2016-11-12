import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { SalesInvoice } from '../model/sales-invoice';
import { CustomerService } from "../service/customer.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
	selector:'customer-detail',
	templateUrl: 'app/templates/customer-detail.html',
	providers: [CustomerService]
})

export class CustomerDetailComponent implements OnInit {
	
    customer: Customer;
    salesInvoices: SalesInvoice[];
    selectedSalesInvoice: SalesInvoice;
    title: string = "SalesInvoices";

    constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {}
    
    getSaleInvoices() {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.customerService.getCustomerSalesInvoice(id)
                .then(salesInvoices => this.salesInvoices = salesInvoices);
        });
    }

    ngOnInit(){
        this.getSaleInvoices(); 
    }

    onSelectSaleInvoice(salinvo: SalesInvoice) {
      this.selectedSalesInvoice = salinvo;
    }

    gotoDetailInvoice(): void {
        this.router.navigate(['sales_invoice/detail/', this.selectedSalesInvoice.id]);
    }
}