 import { SalesInvoice } from "../model/sales-invoice"
 
 export class Customer {
 	id: number;
 	name: string;
 	salesInvoice: Array<SalesInvoice>;
 }