import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CritereComponent} from "./critere/critere.component";
import {LoginComponent} from "./user/login/login.component";
import {DemandeCreateComponent} from "./demande/demande-create/demande-create.component";
import {DemandeListComponent} from "./demande/demande-list/demande-list.component";

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'criteres',component: CritereComponent},
  {path:'demandes/creer',component:DemandeCreateComponent},
  {path:'demandes',component:DemandeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
