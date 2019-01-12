import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(public router: Router) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('access_token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((err) => {
                // Error processing request (Forbidden, Unauthorized ...)
                localStorage.removeItem('access_token');
                this.router.navigate(['/login']);
                return throwError(err);
            }
            ));
    }
}


@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})


export class Interceptor { }
