import {Customer} from '../model/customer';
import {SALESINVOICES} from '../mock/sales-invoice-mock';


export const CUSTOMERS: Customer[] = [
    {
        id: 1032,
        name: "Edison Rosero",
        salesInvoice: [SALESINVOICES[0], SALESINVOICES[1]]
    },
    {
        id: 1033,
        name: "Juan Valdez",
        salesInvoice: [SALESINVOICES[1]]
       
    },
    {
        id: 1034,
        name: "Lina Maria",
        salesInvoice: [SALESINVOICES[2]]
    }
];