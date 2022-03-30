import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CritereComponent} from "./critere/critere.component";
import {LoginComponent} from "./user/login/login.component";
import {DemandeCreateComponent} from "./demande/demande-create/demande-create.component";
import {DemandeListComponent} from "./demande/demande-list/demande-list.component";
import {AuthGuard} from "./controller/guards/auth.guard";

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'criteres',component: CritereComponent,canActivate:[AuthGuard]},
  {path:'demandes/creer',component:DemandeCreateComponent,canActivate:[AuthGuard]},
  {path:'demandes',component:DemandeListComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
