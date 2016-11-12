import { Component } from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";
import { Router } from "@angular/router";
@Component({
    selector: 'user-app',
    templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})
export class UserComponent {
    title: string = "Administracion de Usuarios";

    selected: User;

    users: User[];

    constructor(private router: Router, private userService: UserService) {

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

    ngOnInit(): void {
        this.getUsers();
    }

    onSelect(user: User){
        this.selected = user;
    }

    add(email: string): void {
        email = email.trim();
        if (!email) { return; }
        this.userService.create(email)
            .subscribe(user => {
                this.users.push(user);
                this.selected = null;
            });
        this.getUsers();   
    }
    gotoDetail(): void {
        this.router.navigate(['user/detail/', this.selected.email]);
    }
}