import { Component } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/customer-list.html',
  providers: [CustomerService]
})

export class CustomerListComponent {

    title: string = "Mis Clientes";
    customers: Customer[];
    selectedCustomer: Customer;
   
    constructor(private router: Router, private customerService: CustomerService){}
    
    
    getCustomers() {
        this.customerService.getCustomers().then(customers => this.customers = customers);
    }

    ngOnInit(){
        this.getCustomers();
    }
    
    onSelect(cust: Customer) {
      this.selectedCustomer = cust;
    }

    gotoDetail(): void {
        this.router.navigate(['customer/detail/', this.selectedCustomer.id]);
    }
}

