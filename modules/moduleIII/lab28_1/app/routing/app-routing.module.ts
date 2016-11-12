import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";


import {ProductComponent} from "../component/product.component";
import {ProductDetailComponent} from "../component/product-detail.component";

import {UserComponent} from "../component/user.component";
import {UserDetailComponent} from "../component/user-detail.component";



const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'product', component: ProductComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
    { path: 'user', component: UserComponent },
    { path: 'user/detail/:id', component: UserDetailComponent }
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}