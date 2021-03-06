import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { Lecture } from './lecture';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Presence } from '../presences/presence';

@Injectable({
  providedIn: 'root'
})
export class LectureService extends BaseService<Lecture> {

  resource = 'lecture';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<Lecture> {
    return this.getEntity(id).pipe(map(data => {
      return new Lecture(data);
    }));
  }

  list(): Observable<Lecture[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new Lecture(item))));
  }

  listPresences(lecture: Lecture): Observable<Presence[]> {
    return this.http.get<Presence[]>(this.RESOURCE_ID_URL(this.resource, String(lecture.id)) + '/presence').pipe(
      map(list => list.map(item => new Presence(item))));
  }

  add(lecture: Lecture): Observable<Lecture> {
    return this.addEntity(lecture).pipe(map(data => {
      return new Lecture(data);
    }));
  }

  update(lecture: Lecture): Observable<Lecture> {
    return this.updateEntity(lecture).pipe(map(data => {
      return new Lecture(data);
    }));
  }

  delete(id: number): Observable<Lecture> {
    return this.getEntity(id).pipe(map(data => {
      return new Lecture(data);
    }));
  }

}
