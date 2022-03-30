import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CritereComponent } from './critere/critere.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './user/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DemandeCreateComponent } from './demande/demande-create/demande-create.component';
import { DemandeListComponent } from './demande/demande-list/demande-list.component';
import { DemandeCardComponent } from './demande/demande-card/demande-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AuthGuard} from "./controller/guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    CritereComponent,
    LoginComponent,
    FooterComponent,
    DemandeCreateComponent,
    DemandeListComponent,
    DemandeCardComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
