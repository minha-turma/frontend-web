import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { Presence } from './presence';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenceService extends BaseService<Presence> {

  resource = 'presence';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<Presence> {
    return this.getEntity(id).pipe(map(data => {
      return new Presence(data);
    }));
  }

  list(): Observable<Presence[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new Presence(item))));
  }

  average(): Observable<number> {
    return this.http.get<number>(this.RESOURCE_URL(this.resource) + '/average');
  }

  add(presence: Presence): Observable<Presence> {
    return this.addEntity(presence).pipe(map(data => {
      return new Presence(data);
    }));
  }

  update(presence: Presence): Observable<Presence> {
    return this.updateEntity(presence).pipe(map(data => {
      return new Presence(data);
    }));
  }

  delete(id: number): Observable<Presence> {
    return this.getEntity(id).pipe(map(data => {
      return new Presence(data);
    }));
  }

}
