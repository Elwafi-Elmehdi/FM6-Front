import {Component, Input, OnInit} from '@angular/core';
import {Demande} from "../../controller/models/demande";

@Component({
  selector: 'app-demande-card',
  templateUrl: './demande-card.component.html',
  styleUrls: ['./demande-card.component.css']
})
export class DemandeCardComponent implements OnInit {

  constructor(demande:Demande) {
    this.demande = demande;
  }
  @Input()
  public demande:Demande;
  ngOnInit(): void {
  }

}
