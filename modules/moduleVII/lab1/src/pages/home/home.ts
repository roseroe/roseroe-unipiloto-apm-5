import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage} from '../list/list';
import { List2Page} from '../list2/list2';
import { List3Page} from '../list3/list3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selected:any = false;
  constructor(public navCtrl: NavController) {
    
  }

  public product: any = {
  	id: 1,
  	name: "phone",
  	type: "any",
  	quantity: 4000,
  	price: 500000
  }

  loadInfo() {
  	this.selected = true;
  }

  list()
  {
  	this.navCtrl.push(ListPage);
  }

  list2()
  {
  	this.navCtrl.push(List2Page);
  }

  list3()
  {
  	this.navCtrl.push(List3Page);
  }
}
