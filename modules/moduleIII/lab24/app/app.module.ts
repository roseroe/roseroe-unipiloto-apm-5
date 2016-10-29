import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { ProductListComponent } from './component/product-list.component';
import { UserListComponent } from './component/user-list.component';
import { AppRoutingModule} from "./routing/app-routing.module";
import { HomeComponent} from "./component/home.component";
import { UserDetailComponent } from './component/user-detail.component';
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
      ProductListComponent,
      UserListComponent,
      HomeComponent,
      UserDetailComponent,
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
