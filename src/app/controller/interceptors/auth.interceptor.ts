import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthenticationService) {}
  public url = environment.urlBase;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = request.url;
    if(url.includes(this.url+'/login')){
      return  next.handle(request);
    }
    this.authService.loadToken();
    const token = this.authService.token;
    const httpRequest = request.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      }
    );
    return next.handle(httpRequest);
  }
}
