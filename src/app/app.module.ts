import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AppRoutingModule } from './/app-routing.module';
import { StudentService } from './student.service';
import { FormsModule}      from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { ListbatchComponent } from './batch/listbatch/listbatch.component';
import { AddclassComponent } from './class/addclass/addclass.component';
import { ListclassComponent } from './class/listclass/listclass.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';

import { FileUtil }                         from './file.util';
import { Constants }                        from './import.constants';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent,
    
    AddbatchComponent,
    ListbatchComponent,
    AddclassComponent,
    ListclassComponent,
    TeacherComponent,
    AddteacherComponent,
    DropdownComponent,
    LoginpageComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],


  providers: [StudentService,
    FileUtil,
    Constants
],

  bootstrap: [AppComponent]
})
export class AppModule { }
