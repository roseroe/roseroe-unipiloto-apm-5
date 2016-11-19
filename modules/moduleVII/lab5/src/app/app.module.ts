import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { PageHome } from '../pages/page-home/page-home';
import { PageProduct } from '../pages/page-product/page-product';
import { PageUser } from '../pages/page-user/page-user';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { UserDetailPage } from '../pages/user-detail/user-detail';

@NgModule({
  declarations: [
    MyApp,
    PageHome,
    PageProduct,
    PageUser,
    ProductDetailPage,
    UserDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PageHome,
    PageProduct,
    PageUser,
    ProductDetailPage,
    UserDetailPage
  ],
  providers: []
})
export class AppModule {}
