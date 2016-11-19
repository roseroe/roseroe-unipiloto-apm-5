import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PageUser} from '../page-user/page-user';
import { PageProduct} from '../page-product/page-product';

/*
  Generated class for the PageHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-home',
  templateUrl: 'page-home.html'
})
export class PageHome {

 
  ionViewDidLoad() {
    console.log('Hello PageHomePage Page');
  }

   selected:any = false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  loadInfo() {
  	this.selected = true;
  }

  viewUsers()
  {
  	//this.navCtrl.push(UserListPage);
   let profileModal = this.modalCtrl.create(PageUser);
   profileModal.present();
  }

  viewProducts()
  {
    let profileModal = this.modalCtrl.create(PageProduct);
   profileModal.present();
    //this.navCtrl.push(ProductListPage);
  }

}
