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
var user_service_1 = require("../service/user.service");
var router_1 = require("@angular/router");
var UserComponent = (function () {
    function UserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.title = "Administracion de Usuarios";
    }
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.onSelect = function (user) {
        this.selected = user;
    };
    UserComponent.prototype.add = function (email) {
        var _this = this;
        email = email.trim();
        if (!email) {
            return;
        }
        this.userService.create(email)
            .subscribe(function (user) {
            _this.users.push(user);
            _this.selected = null;
        });
        this.getUsers();
    };
    UserComponent.prototype.gotoDetail = function () {
        this.router.navigate(['user/detail/', this.selected.email]);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-app',
            templateUrl: 'app/templates/user-list.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map