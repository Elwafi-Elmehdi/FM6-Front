import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../controller/services/demande.service";
import {Demande} from "../../controller/models/demande";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../controller/services/authentication.service";

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  constructor(private service:DemandeService,private authService:AuthenticationService,private router:Router) { }

  public demandes:Array<Demande> = new Array<Demande>();

  public filterObj = {
    age: null,
    cin:null,
    fonction:null,
    codeAdherent:null,
    telephone:null,
    anciennete:null
  }
  ngOnInit(): void {
    this.generateYears()
    this.service.getDemandes().subscribe(res => {
      this.demandes = res;
      console.log(res)
    })
  }

  recherche() {
    console.log(this.filterObj)
    this.service.getDemandeByCIN(this.filterObj.cin).subscribe(res => {
      this.demandes = res;
    })
  }

  getLink(demande:Demande) {
   this.service.demande = demande;
   this.router.navigate(['/demandes/creer'])
  }

  isAdmin() {
    return this.authService.user.role ==='ROLE_ADMIN' ? false : true;
  }
  generateYears(): Array<Number> {
    const currentDate = new Date();
    let years = [currentDate.getFullYear()]
    for (let i = 0; i < 5; i++) {
      years.push(years[i]-1)
    }
    return years;
  }


}
