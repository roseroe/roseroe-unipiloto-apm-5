import { LineItem } from "../model/line-item"

  export class SalesInvoice {
 	id: number;
 	invoiceAmount: number;
 	tax: number;
 	lineItems: Array<LineItem>;
 }