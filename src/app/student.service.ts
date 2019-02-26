import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Student } from './student';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}

  private studentUrl = 'http://localhost:8080//topics/{topicId}/cclass/{cclass_id}/student';
  //private studentUrl = '/student';
  
  public getAllStudents() {
    return this.http.get<Student[]>('http://localhost:8080/students');
  }

  public getAllStudent(topId,classId) {
    return this.http.get<Student[]>('http://localhost:8080//topics/'+ topId + '/cclass/' +classId+'/student');
  }

  public deleteStudent(id) {
    return this.http.delete(this.studentUrl + "/"+ id);
  }

  public addStudent(topId,classId,student) {
    return this.http.post<Student>('http://localhost:8080//topics/'+ topId + '/cclass/' +classId+'/student',student);
  }
  public updateStudent(topId,classId,stId,student) {
    return this.http.put('http://localhost:8080//topics/'+ topId + '/cclass'+'/' +classId+'/student'+'/'+stId,student);
  }
  public getStudent(id) {
    return this.http.get<Student>(this.studentUrl + '/' + id);
  }

}
