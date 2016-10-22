import { Component } from '@angular/core';

 export class User {
 	id: number;
 	name: string;
 	addres: string;
 	phone: string;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/user.html' 
})
export class AppComponent {
	title: string="Mis usuarios";
    selected: User;
    users: User[] = USERS;

    onSelect(user: User) {
      this.selected = user;
    }
}

const USERS: User[] = [
    {
        id: 1032,
        name: "Edison Rosero",
        addres: "Diag 48 # 18-45",
        phone: "3115018475"
    },
    {
        id: 1033,
        name: "Juan Valdez",
        addres: "Cra 26 # 4-33",
        phone: "5241544"
    },
    {
        id: 1034,
        name: "Lina Maria",
        addres: "Diag 48 # 18-45",
        phone: "3115018475"
    }
];

