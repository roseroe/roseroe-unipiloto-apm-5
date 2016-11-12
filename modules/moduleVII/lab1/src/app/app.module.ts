import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { List2Page } from '../pages/list2/list2';
import { List3Page } from '../pages/list3/list3';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    List3Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    List3Page
  ],
  providers: []
})
export class AppModule {}
