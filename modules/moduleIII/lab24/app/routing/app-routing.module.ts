import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {ProductListComponent} from "../component/product-list.component";
import {UserListComponent} from "../component/user-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";
import {UserDetailComponent} from "../component/user-detail.component";


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'lista-productos',  component:  ProductListComponent},
    { path: 'lista-usuarios',  component:  UserListComponent},
    { path: 'product/detail/:id', component: ProductDetailComponent },
    { path: 'user/detail/:id', component: UserDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}