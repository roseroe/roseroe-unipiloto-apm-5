import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {UserService} from '../providers/service';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = null;

  constructor(platform: Platform, private userService: UserService) {
    platform.ready().then(() => {
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
