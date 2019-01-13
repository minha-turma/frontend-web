import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { SchoolClass } from './school-class';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService extends BaseService<SchoolClass> {

  resource = 'schoolClass';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<SchoolClass> {
    return this.getEntity(id).pipe(map(data => {
      return new SchoolClass(data);
    }));
  }

  list(): Observable<SchoolClass[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new SchoolClass(item))));
  }

  add(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.addEntity(schoolClass).pipe(map(data => {
      return new SchoolClass(data);
    }));
  }

  update(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.updateEntity(schoolClass).pipe(map(data => {
      return new SchoolClass(data);
    }));
  }

  delete(id: number): Observable<SchoolClass> {
    return this.getEntity(id).pipe(map(data => {
      return new SchoolClass(data);
    }));
  }

}
