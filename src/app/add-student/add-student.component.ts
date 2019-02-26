import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, Params} from '@angular/router';
import { Student } from '../student';
import { StudentService} from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student= new Student();
  cruntId:any='';
  topId:any='';
  classId:any='';
  stId:any='';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit() {
// subscribe to router event
this.activatedRoute.params.subscribe((params: Params) => {
 // this.cruntId = params['id'];
  this.topId = params['topId'];
  this.classId = params['classId'];
  this.stId = params['stId'];
  this.getStudent();
});
  }
  addStudent(): void {
    this.studentService.addStudent(this.topId,this.classId,this.student)
        .subscribe( data => {
          alert("Student created successfully.");
        });

  };
  updateStudent(): void {
    this.studentService.updateStudent(this.topId,this.classId,this.stId,this.student)
       .subscribe( data =>{
         alert("student updated sucessfully.");
       });
  };
  getStudent(): void {
    this.studentService.getStudent(this.stId)
       .subscribe( data =>{
         if(this.stId)
        this.student=data;
       });
  };
  


}
