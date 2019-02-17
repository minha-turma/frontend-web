import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../model/Entity';

//const API_URL = 'http://localhost:8080/api';
const API_URL = '/api';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends Entity> {

  abstract resource: string;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

  protected getEntity(id: number): Observable<T> {
    return this.http.get<any>(this.RESOURCE_ID_URL(this.resource, String(id)));
  }

  protected listEntity(): Observable<T[]> {
    return this.http.get<any[]>(this.RESOURCE_URL(this.resource));
  }

  protected addEntity(data: any): Observable<T> {
    return this.http.post<T>(this.RESOURCE_URL(this.resource), data);
  }

  protected updateEntity(data: T): Observable<any> {
    return this.http.put<any[]>(this.RESOURCE_ID_URL(this.resource, String(data.id)), data);
  }

  protected deleteEntity(id: number): Observable<T> {
    return this.http.delete<T>(this.RESOURCE_ID_URL(this.resource, String(id)));
  }

  public count(): Observable<number> {
    return this.http.get<number>(this.RESOURCE_URL(this.resource) + '/count');
  }

  protected RESOURCE_ID_URL(resource: string, id: string) {
    return `${API_URL}/${resource}/${id}`;
  }
  protected RESOURCE_URL(resource: string) {
    return `${API_URL}/${resource}`;
  }

}
