import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./local-storage.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpCLient:HttpClient,
              private storageService:LocalStorageService,
              private router:Router) { }
  private url = environment.urlBase+'/users';
  private jwtHelper = new JwtHelperService();
  private _user = new User();
  private _token :string|null = ''
  private _storedUsername = ''

  public saveToken(token: string | null){
    this._token = token;
    this.storageService.set(environment.tokenLabel,token);
  }
  public loadToken(){
    this._token = this.storageService.get(environment.tokenLabel);
  }
  public getUserFromStorage(){
    this.user = JSON.parse(<string>this.storageService.get(environment.userLabel));
    return JSON.parse(<string>this.storageService.get(environment.userLabel));
  }
  public login(user:User){
    this.httpCLient.post<any>(this.url+'/login/',user,{observe:'response'}).subscribe(data => {
      if(data.headers.get("Jwt-Token") && data.body.user){
        let token = data.headers.get("Jwt-Token");
        let user = data.body
        this.saveToken(token)
        this.saveUserAndUsername(user)
        this.router.navigate(['/demandes'])
      }
    })
  }

  public logout(){
    this.httpCLient.post(this.url+'/logout/', {}).subscribe(data => {
      console.log(data)
    })
    this._token = ''
    this.storedUsername = ''
    this.storageService.remove(environment.tokenLabel)
    this.storageService.remove(environment.userLabel)
    this.storageService.remove(environment.usernameLabel)
    this.router.navigate([''])
  }

  public isLoggedIn(): boolean {
    this.loadToken();
    if(this.token != null && this.token !== ''){
      if(this.jwtHelper.decodeToken(this.token) != null || ''){
        if(!this.jwtHelper.isTokenExpired(this.token)){
          this.storedUsername = this.jwtHelper.decodeToken(this.token)._id;
          this.user.role = this.jwtHelper.decodeToken(this.token).role;
          this.saveUserAndUsername(this.user);
          return true
        }
      }
    }
    else{
      this.logout();
      return false;
    }
    return false;
  }
  private saveUserAndUsername(user:any){
    this.storedUsername = user.username
    this.user = user
    this.storageService.set(environment.usernameLabel,user.username)
    this.storageService.set(environment.userLabel, JSON.stringify(user))
  }







  get token(): string | null {
    return this._token;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  set token(value: string | null) {
    this._token = value;
  }

  get storedUsername(): string {
    return this._storedUsername;
  }

  set storedUsername(value: string) {
    this._storedUsername = value;
  }
}
