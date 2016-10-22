"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var AppComponent = (function () {
    function AppComponent() {
        //title : string="Mis usuarios";
        this.user = {
            id: 1032,
            name: "Edison Rosero",
            addres: "Diagon1",
            phone: "4576065"
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/user.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
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
*/
//# sourceMappingURL=app.component.js.map