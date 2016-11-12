import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from "../service/user.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/templates/user-detail.html',
     providers: [UserService]
})

export class UserDetailComponent implements OnInit {
    title: string = "Usuario";
    user: User;
    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}
    

    getDetailUser() {
        this.route.params.forEach((params: Params) => {
            this.userService.getUser(params['id'])
            .subscribe(user => this.user = user);
        });
    }

    ngOnInit(){
        this.getDetailUser(); 
    }


    save(): void {
        this.userService.update(this.user)
            .subscribe(
                response => {console.log(response); this.router.navigate(['user/'])},
                err => { console.log(err)});

    }

    delete(): void {
        this.userService.delete(this.user)
        .subscribe(
                response => {console.log(response); this.router.navigate(['user/'])},
                err => { console.log(err)});           
    }
    /*
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.userService.create(name)
            .subscribe(user => {
                this.users.push(user);
                this.selected = null;
            });
         this.getUsers();
    }
    */
}

