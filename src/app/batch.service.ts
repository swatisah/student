import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Batch } from './batch';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http:HttpClient) {}

  private batchUrl = 'http://localhost:8080/topics';
  //private studentUrl = '/student';
  

  public getAllBatch() {
    return this.http.get<Batch[]>(this.batchUrl);
  }

  public deleteBatch(id) {
    return this.http.delete(this.batchUrl + "/"+ id);
  }

  public addBatch(batch) {
    return this.http.post<Batch>(this.batchUrl,batch );
  }
  public updateBatch(batch,id) {
    return this.http.put(this.batchUrl + '/' + id, batch);
  }
  public getBatch(id) {
    return this.http.get<Batch>(this.batchUrl + '/' + id);
  }

}
