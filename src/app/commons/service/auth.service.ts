import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../model/Entity';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

const API_URL = 'http://localhost:8080/api';

function RESOURCE_ID_URL(resource: string, id: string) {
    return `${API_URL}/${resource}/${id}`;
}
function RESOURCE_URL(resource: string) {
    return `${API_URL}/${resource}`;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    resource = 'login';

    constructor(public http: HttpClient,
                public router: Router) {
    }

    public login(username: string, password: String): Observable<boolean> {
        return this.http.post<any>(RESOURCE_URL(this.resource), {username: username, password: password}).pipe(
            tap(result => {
                localStorage.setItem('access_token', result.access_token);
            }),
            map(() => true)
        );
    }

    public logout() {
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
    }

}
