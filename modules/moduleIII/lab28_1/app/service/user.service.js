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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersURI = 'http://138.68.0.83:7070/api/v1/user/';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    UserService.prototype.getUsers = function () {
        var url = this.usersURI + 'list';
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (email) {
        var url = this.usersURI + 'profile/' + email;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.update = function (user) {
        var url = this.usersURI + 'update/' + user.email;
        return this.http
            .put(url, JSON.stringify(user), { headers: this.headers })
            .map(function () { return user; })
            .catch(this.handleError);
    };
    UserService.prototype.create = function (email) {
        var url = this.usersURI + 'sign-up';
        return this.http
            .post(url, JSON.stringify({ email: email }), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.delete = function (user) {
        var url = this.usersURI + 'delete/' + user.email;
        return this.http.delete(url)
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Rx_1.Observable.throw(error.message || error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map