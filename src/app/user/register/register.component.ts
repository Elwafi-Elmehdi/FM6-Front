import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../controller/services/authentication.service";
import {User} from "../../controller/models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private service:AuthenticationService) { }
  // TODO implement register user with roles GUI and controller
  // @ts-ignore
  public user : User;
  ngOnInit(): void {
    this.user = new User();
  }
  retour() {
    this.router.navigate(['/demandes']);
  }

  save(user: any) {
    this.service.register(user).subscribe(res => {})
    this.user = new User();
    this.router.navigate(['/demandes']);
  }
}
