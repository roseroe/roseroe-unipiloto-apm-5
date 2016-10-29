import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/user-list.html',
  providers: [UserService]
})

export class UserListComponent {

    title: string = "Mis Usuarios";
    users: User[];
   
    constructor(private userService: UserService){}
    
    selectedUser: User;
    
    ngOnInit(){
        this.userService.getUsers()
        .then(users => this.users = users)
        .catch(error => console.log(error));
    }
    
    onSelectUser(stud: User) {
      this.selectedUser = stud;
    }
}

