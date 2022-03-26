import { Component, OnInit } from '@angular/core';
import {Demande} from "../../controller/models/demande";

@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit {
  private _demande = new Demande();
  constructor() { }

  get demande(): Demande {
    return this._demande;
  }

  set demande(value: Demande) {
    this._demande = value;
  }

  ngOnInit(): void {
  }

  addDemande(demande: Demande) {

  }
}
