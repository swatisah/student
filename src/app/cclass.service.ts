import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cclass } from './class';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CclassService {

  constructor(private http:HttpClient) {}

  private cclassUrl = 'http://localhost:8080//cclass';
  //private studentUrl = '/student';
  

  public getAllCclass(a) {
    return this.http.get('http://localhost:8080//topics/'+a+'/cclass');
  }

  public deleteCclass(id) {
    return this.http.delete(this.cclassUrl+ "/"+ id);
  }

  public addCclass(a,cclass) {
    return this.http.post<Cclass>('http://localhost:8080//topics/'+a+'/cclass',cclass );
  }
  public updateCclass(top_id,classId,data) {
    return this.http.put('http://localhost:8080//topics/'+top_id+'/cclass'+ '/' + classId, data);
  }
  public getCclass(top_id,id) {
    return this.http.get<Cclass>('http://localhost:8080//topics/'+top_id+'/cclass'+ '/' + id);
  }

}
