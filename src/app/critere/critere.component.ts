import { Component, OnInit } from '@angular/core';
import {CritereService} from "../controller/services/critere.service";
import {Critere} from "../controller/models/critere";
import {Router} from "@angular/router";

@Component({
  selector: 'app-critere',
  templateUrl: './critere.component.html',
  styleUrls: ['./critere.component.css']
})
export class CritereComponent implements OnInit {

  constructor(private service:CritereService,private router:Router) { }

  private _critere:Critere = new Critere();


  get critere(): Critere{
    return this._critere;
  }

  set critere(value: Critere) {
    this._critere = value;
  }

  updateCritere(critere:Critere):void{
    this.service.updateCritereGlobale(critere).subscribe(cri =>{
      this.critere = cri;
      this.router.navigate(['']);
    });
  }

  ngOnInit(): void {
    this.service.getCritereGlobale().subscribe(cri => {
      this.critere = cri;
    });
  }
}
