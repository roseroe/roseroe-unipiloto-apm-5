import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { UserService} from '../providers/service';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = null;

constructor(platform: Platform, public userService: UserService) {
    platform.ready().then(() => {
    var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };
  window["plugins"].OneSignal
    .startInit("20729931-80ca-45af-b48a-a11d84589ff0", "574293351514")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

      StatusBar.styleDefault();
      Splashscreen.hide();
       this.userService.openDatabase()
        .then(() => this.userService.createTable())
        .then(() => {
          this.rootPage = TabsPage;
        })
    });
  }
}
