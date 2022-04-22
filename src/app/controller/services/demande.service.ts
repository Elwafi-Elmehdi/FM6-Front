import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Demande} from "../models/demande";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private url = environment.urlBase+'/demandes/';
  private _demande: Demande | undefined;
  private _mode : String = "CREATE";


  get mode(): String {
    return this._mode;
  }

  set mode(value: String) {
    this._mode = value;
  }

  get demande(): Demande |undefined {
    return this._demande;
  }

  set demande(value: Demande  | undefined) {
    this._demande = value;
  }

  constructor(private httpClient:HttpClient) { }

  getDemandes(index:any) {
    if(index === null){
      return this.httpClient.get(this.url);
    }
    else{
      return this.httpClient.get(this.url+"?page="+index);
    }
  }

  getDemandeByCIN(cin:string|null|undefined) {
    return this.httpClient.get<Array<Demande>>(this.url+'cin/'+cin);
  }
  getReport(year:number){
    return this.httpClient.get(this.url + 'reporting/' + year +'/', { responseType: 'arraybuffer' });
  }



  addDemande(demande:Demande) {
    return this.httpClient.post(this.url,demande);
  }
  updateDemande(demande:Demande){
    return this.httpClient.put(this.url,demande);
  }

  deleteDemande(demande:Demande) {
    return this.httpClient.delete(this.url,{body:demande});
  }
  searchDemandeByCriteria(obj:any){
    return  this.httpClient.post(this.url+'criteres/',obj);
  }

}
