import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService<Message> {

  resource = 'message';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<Message> {
    return this.getEntity(id).pipe(map(data => {
      return new Message(data);
    }));
  }

  list(): Observable<Message[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new Message(item))));
  }

  add(message: Message): Observable<Message> {
    return this.addEntity(message).pipe(map(data => {
      return new Message(data);
    }));
  }

  update(message: Message): Observable<Message> {
    return this.updateEntity(message).pipe(map(data => {
      return new Message(data);
    }));
  }

  delete(id: number): Observable<Message> {
    return this.getEntity(id).pipe(map(data => {
      return new Message(data);
    }));
  }

}
