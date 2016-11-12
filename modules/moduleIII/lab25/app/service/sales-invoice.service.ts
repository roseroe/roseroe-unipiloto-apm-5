import {Injectable} from "@angular/core";
import {SALESINVOICES} from "../mock/sales-invoice-mock";
import {SalesInvoice} from "../model/sales-invoice";
import {LineItem} from "../model/line-item";

@Injectable()
export class SalesInvoiceService{
    getSalesInvoices(): Promise<SalesInvoice[]>{
        return Promise.resolve(SALESINVOICES);
    }

    getSalesInvoice(id: number): Promise<SalesInvoice> {
        return this.getSalesInvoices()
            .then(salesinvoices => salesinvoices.find(salesinvoice => salesinvoice.id === id));
    }

    getLineItemDetail(id: number): Promise<LineItem[]> {
        return this.getSalesInvoices()
            .then(salesinvoices => salesinvoices.find(salesinvoice => salesinvoice.id === id).lineItems);
    }
}