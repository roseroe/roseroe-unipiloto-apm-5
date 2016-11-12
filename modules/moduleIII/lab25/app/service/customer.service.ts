import {Injectable} from "@angular/core";
import {CUSTOMERS} from "../mock/customer-mock";
import {Customer} from "../model/customer";
import {SalesInvoice} from "../model/sales-invoice";
import {SALESINVOICES} from "../mock/sales-invoice-mock";


@Injectable()
export class CustomerService{
    getCustomers(): Promise<Customer[]>{
        return Promise.resolve(CUSTOMERS);
    }

    getCustomer(id: number): Promise<Customer> {
        return this.getCustomers()
            .then(customers => customers.find(customer => customer.id === id));
    }

    getCustomerSalesInvoice(id: number): Promise<SalesInvoice[]> {
        return this.getCustomers()
            .then(customers => customers.find(customer => customer.id === id).salesInvoice);
    }
}