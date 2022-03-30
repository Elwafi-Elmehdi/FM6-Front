import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../controller/services/authentication.service";
import {User} from "../controller/models/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:AuthenticationService) { }
  public usernme:string|undefined;
  public role:string|undefined;
  ngOnInit(): void {
   this.usernme = this.service.storedUsername;
   let user = new User();
    user = this.service.getUserFromStorage();
   this.role = user.role?.substr("ROLE_".length);
  }

  logout() {
    this.service.logout();
  }
}
