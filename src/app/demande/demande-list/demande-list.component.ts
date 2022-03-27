import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../controller/services/demande.service";
import {Demande} from "../../controller/models/demande";

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  constructor(private service:DemandeService) { }
  public demandes:Array<Demande> = new Array<Demande>();

  ngOnInit(): void {
    this.service.getDemandes().subscribe(res => {
      this.demandes = res;
      console.log(res)
    })
  }

}
