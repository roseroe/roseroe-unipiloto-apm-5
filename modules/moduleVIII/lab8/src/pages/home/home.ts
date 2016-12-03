import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PageUser} from '../page-user/page-user';
import { Storage } from '@ionic/storage';
import { User } from '../../model/user';
import { UserService } from "../../providers/service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   providers: [UserService]
})
export class HomePage {
  users: any[] = [];
  user: User = new User();

  ionViewDidLoad() {
    console.log('Hello PageHomePage Page');
    this.getAllUsers();
  }

   selected:any = false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public userService: UserService) {

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
        console.log(this.user);
        this.userService.create(this.user)
              .then(response => {
                //this.users.unshift(response)
                this.users.push(response);
              })
              .catch(error => {
                console.error(error);
              });
       this.getAllUsers();
    }


}
