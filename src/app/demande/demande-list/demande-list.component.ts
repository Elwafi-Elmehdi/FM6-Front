import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../controller/services/demande.service";
import {Demande} from "../../controller/models/demande";
import {Router} from "@angular/router";

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  constructor(private service:DemandeService,private router:Router) { }

  public demandes:Array<Demande> = new Array<Demande>();

  public filterObj = {
    age: 0,
    cin:"",
    fonction:null,
    codeAdherent:"",
    telephone:"",
    anciennete:0
  }
  ngOnInit(): void {
    this.service.getDemandes().subscribe(res => {
      this.demandes = res;
      console.log(res)
    })
  }

  recherche() {
    this.service.searchDemandeByCriteria(this.filterObj).subscribe(res => {
      console.log(res)
      this.demandes = res;
    })
  }

  getLink(demande:Demande) {
   this.service.demande = demande;
   this.router.navigate(['/demandes/creer'])
  }
}
