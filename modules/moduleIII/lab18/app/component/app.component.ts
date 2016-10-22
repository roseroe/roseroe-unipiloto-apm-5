import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html' 
})
export class AppComponent {
	titleStudents: string="Lista de Estudiantes:";
    titleTeachers: string="Lista de Profesores:";

    selectedStudent: Student;
    students: Student[] = STUDENTS;

    selectedTeacher: Teacher;
    teachers: Teacher[] = TEACHERS;

    onSelectStudent(stud: Student) {
      this.selectedStudent = stud;
    }

    onSelectTeacher(teach: Teacher) {
      this.selectedTeacher = teach;
    }
}

const STUDENTS: Student[] = [
    {
        id: 1032,
        name: "Edison Rosero",
        clasess: ["Programacion I","Matematicas I"],
        grade: 1
    },
    {
        id: 1033,
        name: "Juan Valdez",
        clasess: ["Programacion II","Matematicas II"],
        grade: 2
    },
    {
        id: 1034,
        name: "Ana Maria",
        clasess: ["Programacion III","Matematicas III"],
        grade: 3
    }
];

const TEACHERS: Teacher[] = [
    {
        id: 5060,
        name: "Luis Carlos",
        rooms: ["Salon Prog 1","Salon Prog 2", "Salon Prog 3"],
        studies: ["Ingeniero de Sistemas","Ingeniero Industrial"]
    },
    {
        id: 5061,
        name: "Pedro Jaramillo",
        rooms: ["Salon Mat 1","Salon Mat 2", "Salon Mat 3"],
        studies: ["Licenciado en Matematicas",'Fisico']
    }
];

