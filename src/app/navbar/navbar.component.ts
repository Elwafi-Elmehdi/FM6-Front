import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../controller/services/authentication.service";
import {User} from "../controller/models/user";
import {LocalStorageService} from "../controller/services/local-storage.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:AuthenticationService,private storagedService:LocalStorageService) { }

  public usernme:string|undefined|null;
  public role:string|undefined|null;

  ngOnInit(): void {

   this.usernme = this.storagedService.get(environment.usernameLabel);
   let user = this.service.getUserFromStorage();
   // @ts-ignore
    this.role = user.role.substr("ROLE_".length);
  }

  logout() {
    this.service.logout();
  }
}
