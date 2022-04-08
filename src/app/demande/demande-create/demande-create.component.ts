import { Component, OnInit } from '@angular/core';
import {Demande} from "../../controller/models/demande";
import {DemandeService} from "../../controller/services/demande.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit {
  private _demande = new Demande();
  constructor(private service:DemandeService,private router:Router,private route:ActivatedRoute) { }

  get mode() : String {
    return this.service.mode
  }

  get demande(): Demande {
    return this._demande;
  }

  set demande(value: Demande) {
    this._demande = value;
  }

  ngOnInit(): void {
    if (this.service.demande != null){
      this.demande = this.service.demande
      this.service.mode = 'UPDATE'
    }else {
      this.service.mode = "CREATE"
    }
  }

  addDemande(demande: Demande) {
    if (this.mode == "CREATE"){
      this.service.addDemande(demande).subscribe(res => {
        console.log(res);
        this.router.navigate(['demandes']);
        console.log(true)
      })
    }else {
      this.service.updateDemande(demande).subscribe(res => {
        console.log(res);
      })
      console.log(false);
      this.router.navigate(['demandes']);
    }

  }
  deleteDemande(demande:Demande) {
    this.service.deleteDemande(demande).subscribe(res => {
      console.log(res)
      if(res instanceof Demande) {
        this.router.navigate(['demandes'])

      }
    })
  }

  retour() {
    this.demande = new Demande();
    this.service.demande = undefined;
    this.service.mode = "CREATE";
    this.router.navigateByUrl("/demandes")
  }
}
