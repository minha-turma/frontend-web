import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { Subject } from './subject';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends BaseService<Subject> {

  resource = 'subject';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<Subject> {
    return this.getEntity(id).pipe(map(data => {
      return new Subject(data);
    }));
  }

  list(): Observable<Subject[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new Subject(item))));
  }

  add(subject: Subject): Observable<Subject> {
    return this.addEntity(subject).pipe(map(data => {
      return new Subject(data);
    }));
  }

  update(subject: Subject): Observable<Subject> {
    return this.updateEntity(subject).pipe(map(data => {
      return new Subject(data);
    }));
  }

  delete(id: number): Observable<Subject> {
    return this.getEntity(id).pipe(map(data => {
      return new Subject(data);
    }));
  }

}
