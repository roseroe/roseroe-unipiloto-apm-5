import { NgModule }      from '@angular/core';//modulo padre
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ 
	  BrowserModule,
	  FormsModule
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } //exportar
