import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./local-storage.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpCLient:HttpClient,
              private storageService:LocalStorageService,
              private router:Router) { }
  private url = environment.urlBase+'/users';
  private jwtHelper = new JwtHelperService();
  private
}
