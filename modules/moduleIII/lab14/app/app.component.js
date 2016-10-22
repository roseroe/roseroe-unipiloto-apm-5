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
var Ride = (function () {
    function Ride() {
    }
    return Ride;
}());
exports.Ride = Ride;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Mi Carrera";
        this.ride = {
            units: 50,
            default: 4100,
            festives: 1900,
            airport: 3900,
            app_pp: 700,
            total: 4100
        };
    }
    AppComponent.prototype.onSelect = function (valor) {
        this.ride.total = this.ride.total + valor;
        this.selected = this.ride.total;
    };
    AppComponent.prototype.onCalcular = function (unidades) {
        this.ride.total = unidades * this.ride.default;
        this.selected = this.ride.total;
    };
    AppComponent.prototype.onKey = function (event) {
        this.selected = event;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/ride.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map