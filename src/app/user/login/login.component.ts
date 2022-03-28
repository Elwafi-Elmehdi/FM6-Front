import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../controller/services/authentication.service";
import {User} from "../../controller/models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }
  private _user = new User();
  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.router.navigate(['/demandes'])
    }
  }
  login(user:User) {
    this.authService.login(user);
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
