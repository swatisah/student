import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent }   from './student/student.component';
import { RouterModule, Routes } from '@angular/router';
import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { ListbatchComponent } from './batch/listbatch/listbatch.component';
import { AddclassComponent } from './class/addclass/addclass.component';
import { ListclassComponent } from './class/listclass/listclass.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddteacherComponent } from './addteacher/addteacher.component';





const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,children:[
    { path: 'student/:topId/:classId', component: StudentComponent },
  { path: 'addSt', component: AddStudentComponent },
 //new1
  { path: 'addSt/:topId/:classId', component: AddStudentComponent },
  { path: 'update/:topId/:classId/:stId', component: AddStudentComponent },
 // { path: 'addTeach', component: AddteacherComponent },
// { path: 'update/:id', component: AddStudentComponent },
  { path: 'delete/:id', component: StudentComponent},

  { path: 'addtopics', component: AddbatchComponent},
  { path: 'topics', component: ListbatchComponent},
  { path: 'addtopics/:id', component: AddbatchComponent},
  { path: 'delete/:id', component: ListbatchComponent},
 
  // for listing alll if we have
  { path: 'cclass', component: ListclassComponent}, 
  { path: 'cclass/:topId', component: ListclassComponent},

{path: 'addcclass/:top_id', component: AddclassComponent },
{path: 'update/:top_id/:classId', component: AddclassComponent },
{ path: 'delete/:id', component: ListclassComponent},

{ path: 'teacher/:topId/:classId', component: TeacherComponent },
{ path: 'students', component: StudentComponent },
{ path: 'teachers', component: TeacherComponent },
{ path: 'addTeach/:topId/:classId', component: AddteacherComponent },
{ path: 'addTeachUpdate/:topId/:classId/:tecId', component: AddteacherComponent },
//now changed

  ] },
  
{path : 'login',component:LoginpageComponent},
{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
