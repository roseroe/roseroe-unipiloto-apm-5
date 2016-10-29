import {SalesInvoice} from '../model/sales-invoice';
import {LINEITEMS} from '../mock/line-item-mock';

export const SALESINVOICES: SalesInvoice[] = [
    {
        id: 1,
        invoiceAmount: 0,
        tax: 19,
        lineItems: [LINEITEMS[0]]
    },
    {
        id: 2,
        invoiceAmount: 0,
        tax: 19,
        lineItems: [LINEITEMS[1]]
    },
    {
        id: 3,
        invoiceAmount: 0,
        tax: 19,
        lineItems: [LINEITEMS[2]]
    }
];