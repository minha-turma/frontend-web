import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  resource = 'user';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<User> {
    return this.getEntity(id).pipe(map(data => {
      return new User(data);
    }));
  }

  list(): Observable<User[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new User(item))));
  }

  listStudents(): Observable<User[]> {
    return this.http.get<User[]>(this.RESOURCE_URL(this.resource) + '/student').pipe(
      map(list => list.map(item => new User(item))));
  }

  add(user: User): Observable<User> {
    return this.addEntity(user).pipe(map(data => {
      return new User(data);
    }));
  }

  addAll(users: User[]): Observable<User[]> {
    return this.http.post<User[]>(this.RESOURCE_URL(this.resource), users).pipe(map(list => {
      return list.map(data => {
        return new User(data);
      });
    }));
  }

  update(user: User): Observable<User> {
    return this.updateEntity(user).pipe(map(data => {
      return new User(data);
    }));
  }

  delete(id: number): Observable<User> {
    return this.getEntity(id).pipe(map(data => {
      return new User(data);
    }));
  }

}
