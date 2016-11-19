import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserListPage } from '../pages/user-list/user-list';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { ProductListPage } from '../pages/product-list/product-list';
import { ProductDetailPage } from '../pages/product-detail/product-detail';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserListPage,
    UserDetailPage,
    ProductListPage,
    ProductDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserListPage,
    UserDetailPage,
    ProductListPage,
    ProductDetailPage
  ],
  providers: []
})
export class AppModule {}
