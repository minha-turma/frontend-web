import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { Confidence } from './confidence';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfidenceService extends BaseService<Confidence> {

  resource = 'confidence';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<Confidence> {
    return this.getEntity(id).pipe(map(data => {
      return new Confidence(data);
    }));
  }

  list(): Observable<Confidence[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new Confidence(item))));
  }

  add(confidence: Confidence): Observable<Confidence> {
    return this.addEntity(confidence).pipe(map(data => {
      return new Confidence(data);
    }));
  }

  update(confidence: Confidence): Observable<Confidence> {
    return this.updateEntity(confidence).pipe(map(data => {
      return new Confidence(data);
    }));
  }

  delete(id: number): Observable<Confidence> {
    return this.getEntity(id).pipe(map(data => {
      return new Confidence(data);
    }));
  }

}
