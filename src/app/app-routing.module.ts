import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CritereComponent} from "./critere/critere.component";
import {LoginComponent} from "./user/login/login.component";

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'critere',component: CritereComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
