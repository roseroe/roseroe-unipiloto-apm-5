import { Component } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from "../../providers/user-service";
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public userService: UserService) {}

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

}
