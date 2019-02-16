import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

//const API_URL = 'http://localhost:8080/api';
const API_URL = '/api';

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

    public isLoggedId(): Boolean {
        if (!localStorage.getItem('access_token')) {
            return false;
        }
        return true;
    }

    public logout() {
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
    }

}
