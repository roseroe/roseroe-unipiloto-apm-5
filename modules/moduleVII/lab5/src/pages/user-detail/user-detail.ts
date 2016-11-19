import { Component } from '@angular/core';
import { User } from '../../model/user';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { UserService } from "../../providers/user-service";
import { PageUser} from '../page-user/page-user';

/*
  Generated class for the UserDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
  providers: [UserService]
})
export class UserDetailPage {
  title: string = "Usuario";
    user: User;

  constructor(public navCtrl: NavController, public userService: UserService, public navParams: NavParams,  public viewCtrl: ViewController) {}
    
    
    getDetailUser() {
    	let email = this.navParams.get('id');
        this.userService.getUser(email)
        .subscribe(user => this.user = user);
        
    }

    save(): void {
        this.userService.update(this.user)
            .subscribe(
              response => {console.log(response); this.viewCtrl.dismiss()},
                err => { console.log(err)});
             //response => {console.log(response); this.navCtrl.push(PageUser)},

    }

    delete(): void {
        this.userService.delete(this.user)
        .subscribe(
              response => {console.log(response); this.viewCtrl.dismiss()},
                err => { console.log(err)});           
        //response => {console.log(response); this.navCtrl.push(PageUser)},
    }


  ionViewDidLoad() {
    console.log('Hello UserDetailPage Page');
     this.getDetailUser(); 
  }

}
