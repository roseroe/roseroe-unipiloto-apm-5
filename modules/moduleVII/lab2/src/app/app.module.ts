import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserListPage } from '../pages/user-list/user-list';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserListPage
  ],
  providers: []
})
export class AppModule {}
