import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {CustomerListComponent} from "../component/customer-list.component";
import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";
import {CustomerDetailComponent} from "../component/customer-detail.component";
import {SalesInvoiceDetailComponent} from "../component/sales-invoice-detail.component";
import {LineItemDetailComponent} from "../component/line-item-detail.component";


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'lista-clientes',  component:  CustomerListComponent},
    { path: 'customer/detail/:id', component: CustomerDetailComponent },
    { path: 'sales_invoice/detail/:id', component: SalesInvoiceDetailComponent },
    { path: 'line_item/detail/:id', component: LineItemDetailComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}