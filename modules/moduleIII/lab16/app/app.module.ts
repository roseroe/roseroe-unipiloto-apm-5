import { NgModule }      from '@angular/core';//modulo padre
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './component/app.component';
import { UserDetailComponent } from './component/user-detail.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ 
	  BrowserModule,
	  FormsModule
   ],
  declarations: [ 
  	AppComponent,
  	UserDetailComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } //exportar
