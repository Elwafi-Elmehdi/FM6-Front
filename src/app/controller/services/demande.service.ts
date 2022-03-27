import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Demande} from "../models/demande";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private url = environment.urlBase+'/demandes/';
  constructor(private httpClient:HttpClient) { }

  getDemandes() {
    return this.httpClient.get<Array<Demande>>(this.url);
  }
  getDemandeByCIN(cin:string) {
    return this.httpClient.get<Array<Demande>>(this.url+'cin/'+cin);
  }
  addDemande(demande:Demande) {
    return this.httpClient.post(this.url,demande);
  }

}
