import { Component, OnInit} from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';
import { StudentService } from '../service/student.service';
import { TeacherService } from '../service/teacher.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html',
  providers: [StudentService, TeacherService]

})
export class AppComponent implements OnInit {

    titleStudents: string="Lista de Estudiantes:";
    titleTeachers: string="Lista de Profesores:";
    students: Student[];
    teachers: Teacher[];

    constructor(private studentService: StudentService, private teacherService: TeacherService){}
    
    selectedStudent: Student;
    selectedTeacher: Teacher;

    ngOnInit(){
        this.studentService.getStudent()
        .then(students => this.students = students)
        .catch(error => console.log(error));

        this.teacherService.getTeachers()
        .then(teachers => this.teachers = teachers)
        .catch(error => console.log(error));
    }
    
    onSelectStudent(stud: Student) {
      this.selectedStudent = stud;
    }

    onSelectTeacher(teach: Teacher) {
      this.selectedTeacher = teach;
    }
}




