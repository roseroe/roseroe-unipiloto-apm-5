import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../model/user';
import { UserService } from "../../providers/service";

/*
  Generated class for the PageUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-user',
  templateUrl: 'page-user.html',
   providers: [UserService]
})
export class PageUser {
  users: User[];
  user: User = new User();
  constructor(public navCtrl: NavController, public userService: UserService) {}

  ionViewDidLoad() {
    console.log('Hello PageUserPage Page');
    this.getAllUsers();
  }

   getAllUsers(){
    this.userService.getAll()
      .then(users => {
        console.log(users);
        this.users = users;
      })
  }

  add(name: string, phone: string, email: string): void {
        if (!email||!name||!phone) { return; }
        this.user.email = email;
        this.user.name = name;
        this.user.phone = phone;

        this.userService.create(this.user)
              .then(response => {
              	this.users.unshift(response)
              	//this.users.push(response);
              })
              .catch(error => {
                console.error(error);
              })
    }

}
