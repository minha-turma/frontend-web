import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(public router: Router) {

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {

        if (req.url.indexOf('login') > 0) {
            return next.handle(req);
        }

        const access_token = localStorage.getItem('access_token');

        // Set Authoziation header if logged in. Redirect to login otherwise
        if (access_token) {
            const interceptedReq = req.clone({
                headers: req.headers.set('Authorization', access_token),
            });
            return next.handle(interceptedReq);
        } else {
            this.router.navigate(['/login']);
            return next.handle(req);
        }
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
