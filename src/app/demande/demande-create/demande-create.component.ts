import { Component, OnInit } from '@angular/core';
import {Demande} from "../../controller/models/demande";
import {DemandeService} from "../../controller/services/demande.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit {
  private _demande = new Demande();
  constructor(private service:DemandeService,private router:Router) { }

  get demande(): Demande {
    return this._demande;
  }

  set demande(value: Demande) {
    this._demande = value;
  }

  ngOnInit(): void {
  }

  addDemande(demande: Demande) {
    console.log(demande)
    this.service.addDemande(demande).subscribe(res => {
      console.log(res);

      this.router.navigate(['']);
    })
  }
}
