import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute, Params} from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService} from '../teacher.service';


@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  teacher: Teacher= new Teacher();
 
  topId:any='';
  classId:any='';
  tecId:any='';
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private teacherService: TeacherService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
    
      this.topId = params['topId'];
      this.classId = params['classId'];
      this.tecId = params['tecId'];
      this.getTeacher();
      });
  }
  addTeacher(): void {
    this.teacherService.addTeacher(this.topId,this.classId,this.teacher)
        .subscribe( data => {
          alert("Teacher created successfully.");
        });
  
  };
  updateTeacher(): void {
    this.teacherService.updateTeacher(this.topId,this.classId,this.tecId,this.teacher)
       .subscribe( data =>{
      
         alert("Teacher updated sucessfully.");
       });
  };

  
  getTeacher(): void {
    this.teacherService.getTeacher(this.tecId)
       .subscribe( data =>{
         if(this.tecId)
        this.teacher=data;
       });
  };
}

