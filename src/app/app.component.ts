import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Fondation Mohammed VI';
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    this.router.navigate(['/demandes'])
  }
}
