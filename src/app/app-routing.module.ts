import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CritereComponent} from "./critere/critere.component";
import {LoginComponent} from "./user/login/login.component";
import {DemandeCreateComponent} from "./demande/demande-create/demande-create.component";

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'critere',component: CritereComponent},
  {path:'demande/creer',component:DemandeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
