import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserListPage} from '../user-list/user-list';
import { ProductListPage} from '../product-list/product-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 selected:any = false;
// myDate: Date = new Date(Date.now());
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  loadInfo() {
  	this.selected = true;
    //this.myDate = new Date(Date.now());
  }

  viewUsers()
  {
  	//this.navCtrl.push(UserListPage);
   let profileModal = this.modalCtrl.create(UserListPage);
   profileModal.present();
  }

  viewProducts()
  {
    let profileModal = this.modalCtrl.create(ProductListPage);
   profileModal.present();
    //this.navCtrl.push(ProductListPage);
  }
}
