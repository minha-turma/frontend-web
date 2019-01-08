import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { Quizz } from './quizz';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService extends BaseService<Quizz> {

  resource = 'quiz';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<Quizz> {
    return this.getEntity(id).pipe(map(data => {
      return new Quizz(data);
    }));
  }

  list(): Observable<Quizz[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new Quizz(item))));
  }

  add(tool: Quizz): Observable<Quizz> {
    return this.addEntity(tool).pipe(map(data => {
      return new Quizz(data);
    }));
  }

  update(tool: Quizz): Observable<Quizz> {
    return this.updateEntity(tool).pipe(map(data => {
      return new Quizz(data);
    }));
  }

  delete(id: number): Observable<Quizz> {
    return this.getEntity(id).pipe(map(data => {
      return new Quizz(data);
    }));
  }

}
