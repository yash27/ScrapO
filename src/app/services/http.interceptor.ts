import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add authorization header with JWT token if available.
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    // Next, hit's this block for every HTTP request. So that we can catch the error here only.
    return next.handle(request).pipe(
      // Retry the failed request for 1 more time.
      retry(1),
      catchError((error: HttpErrorResponse) => {
        this.router.navigate(['/login']);
        return throwError(error);
      })
    );
  }
}
