import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserListPage} from '../user-list/user-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 selected:any = false;
  constructor(public navCtrl: NavController) {
    
  }
  loadInfo() {
  	this.selected = true;
  }

  viewUsers()
  {
  	this.navCtrl.push(UserListPage);
  }

}
