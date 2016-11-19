import { Component } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from "../../providers/user-service";
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { UserDetailPage} from '../user-detail/user-detail';

/*
  Generated class for the UserList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
  providers: [UserService]
})
export class UserListPage {

	  title: string = "Administracion de Usuarios";
    selected: User;
    users: User[];

  constructor(public navCtrl: NavController, public userService: UserService, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {}

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getUsers();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => {
                this.users = users;
            },

            error => {
                console.log(error);
            }
        );
    }


    onSelect(user: User){
        this.selected = user;
        let loading = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 60000,
          dismissOnPageChange: true
      });
        this.gotoDetail(user);
        loading.present();
    }

    gotoDetail(user: User)
    {
       this.navCtrl.push(UserDetailPage, {
            id: user.email
        });
    }
    

    add(email: string): void {
        if (!email) { return; }
        this.userService.create(email)
            .subscribe(user => {
                this.users.push(user);
                this.selected = null;
            });
        this.getUsers();   
    }
    
  

  ionViewDidLoad() {
    console.log('Hello UserListPage Page');
    this.getUsers();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
