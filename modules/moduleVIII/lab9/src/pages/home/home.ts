import { Component } from '@angular/core';
import {UserService} from '../../providers/service';
import { NavController, ModalController} from 'ionic-angular';
import {User} from '../../model/user';
import {UserDetail} from '../user-detail/user-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selected: User;

  users: User[];

  user: User = new User();

  constructor(public navCtrl: NavController, public service: UserService,
              public modalCtrl: ModalController) {}

  ionViewDidLoad(){
    this.getAllUsers();
  }

   getAllUsers(){
    this.service.getAll()
      .then(users => {
        console.log(users);
        this.users = users;
      })
  }


  ngOnInit(): void {
        this.getAllUsers();
    }

    onSelect(user: User){
        this.selected = user;
        //this.navCtrl.push(UserDetail, {email: this.selected.email});
        let modal = this.modalCtrl.create(UserDetail, {id: this.selected.id});
        modal.present();
    }

    add(name: string): void {
    	console.log('nombre: ' + name);
    	
    	this.user.name = name;
        if (!name) { return; }
        this.service.create(this.user)
            .then(user => {
                this.users.push(user);
                this.selected = null;
            });
    }  

    doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.getAllUsers();

    setTimeout(() => {
      console.log('Async operation has ended');

      refresher.complete();

    }, 2000);
  }

}
