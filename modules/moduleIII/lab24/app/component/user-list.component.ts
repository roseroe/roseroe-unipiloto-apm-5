import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/user-list.html',
  providers: [UserService]
})

export class UserListComponent {

    title: string = "Mis Usuarios";
    users: User[];
    selectedUser: User;
   
    constructor(private router: Router, private userService: UserService){}
    
    
    getProducts() {
        this.userService.getUsers().then(users => this.users = users);
    }

    ngOnInit(){
        this.getProducts();
    }
    
    onSelect(stud: User) {
      this.selectedUser = stud;
    }

    gotoDetail(): void {
        this.router.navigate(['user/detail/', this.selectedUser.id]);
    }
}

