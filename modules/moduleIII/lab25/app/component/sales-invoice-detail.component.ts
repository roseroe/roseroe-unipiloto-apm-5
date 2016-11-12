import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { LineItem } from '../model/line-item';
import { SalesInvoiceService } from "../service/sales-invoice.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
	selector:'sales-invoice-detail',
	templateUrl: 'app/templates/sales-invoice-detail.html',
	providers: [SalesInvoiceService]
})

export class SalesInvoiceDetailComponent implements OnInit {
	
    customer: Customer;
    lineItems: LineItem[];
    selectedLineItem: LineItem;
    title: string = "LineItems";

    constructor(private salesInvoiceService: SalesInvoiceService, private route: ActivatedRoute, private router: Router) {}
    
    getLineItems() {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.salesInvoiceService.getLineItemDetail(id)
                .then(lineItems => this.lineItems = lineItems);
        });
    }

    ngOnInit(){
        this.getLineItems(); 
    }

    onSelectLineItem(line: LineItem) {
      this.selectedLineItem = line;
    }

    gotoDetailLineItem(): void {
        this.router.navigate(['line_item/detail/', this.selectedLineItem.lineNumber]);
    }
}