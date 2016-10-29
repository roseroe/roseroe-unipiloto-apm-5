import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './component/app.component';
import { CustomerListComponent } from './component/customer-list.component';
import { ProductListComponent } from './component/product-list.component';
import { AppRoutingModule} from "./routing/app-routing.module";
import { HomeComponent} from "./component/home.component";
import { CustomerDetailComponent } from './component/customer-detail.component';
import { ProductDetailComponent } from './component/product-detail.component';
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      CustomerListComponent,
      ProductListComponent,
      HomeComponent,
      CustomerDetailComponent,
      ProductDetailComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
