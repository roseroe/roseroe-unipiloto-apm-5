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
var AppComponent = (function () {
    function AppComponent() {
        this.titleStudents = "Lista de Estudiantes:";
        this.titleTeachers = "Lista de Profesores:";
        this.students = STUDENTS;
        this.teachers = TEACHERS;
    }
    AppComponent.prototype.onSelectStudent = function (stud) {
        this.selectedStudent = stud;
    };
    AppComponent.prototype.onSelectTeacher = function (teach) {
        this.selectedTeacher = teach;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var STUDENTS = [
    {
        id: 1032,
        name: "Edison Rosero",
        clasess: ["Programacion I", "Matematicas I"],
        grade: 1
    },
    {
        id: 1033,
        name: "Juan Valdez",
        clasess: ["Programacion II", "Matematicas II"],
        grade: 2
    },
    {
        id: 1034,
        name: "Ana Maria",
        clasess: ["Programacion III", "Matematicas III"],
        grade: 3
    }
];
var TEACHERS = [
    {
        id: 5060,
        name: "Luis Carlos",
        rooms: ["Salon Prog 1", "Salon Prog 2", "Salon Prog 3"],
        studies: ["Ingeniero de Sistemas", "Ingeniero Industrial"]
    },
    {
        id: 5061,
        name: "Pedro Jaramillo",
        rooms: ["Salon Mat 1", "Salon Mat 2", "Salon Mat 3"],
        studies: ["Licenciado en Matematicas", 'Fisico']
    }
];
//# sourceMappingURL=app.component.js.map