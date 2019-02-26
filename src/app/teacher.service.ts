import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Student } from './student';
import { Teacher } from './teacher';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) {}

  private teacherUrl = 'http://localhost:8080//topics/{topicId}/cclass/{cclass_id}/teacher';
  //private studentUrl = '/student';
  
  public getAllTeachers() {
    return this.http.get<Teacher[]>('http://localhost:8080/teachers');
  }

  public getAllTeacher(topId,classId) {
    return this.http.get<Teacher[]>('http://localhost:8080//topics/'+ topId + '/cclass/' +classId+'/teacher');
  }

  public deleteTeacher(id) {
    return this.http.delete(this.teacherUrl + "/"+ id);
  }

  public addTeacher(topId,classId,teacher) {
    return this.http.post<Student>('http://localhost:8080//topics/'+ topId + '/cclass/' +classId+'/teacher',teacher );
  }

  
  public updateTeacher(topId,classId,tecId,teacher) {
    return this.http.put('http://localhost:8080//topics/'+ topId + '/cclass/' +classId+'/student/'+tecId,teacher);
  }
  public getTeacher(id) {
    return this.http.get<Teacher>(this.teacherUrl + '/' + id);
  }

}
