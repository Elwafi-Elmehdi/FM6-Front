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

  getDemandes() {
    return this.httpClient.get<Array<Demande>>(this.url);
  }

  getDemandeByCIN(cin:string|null|undefined) {
    return this.httpClient.get<Array<Demande>>(this.url+'cin/'+cin);
  }
  getReport(year:number){
    // this.httpClient.get(this.url + 'reporting/' + year).subscribe(data => this.downloadFile(data)),//console.log(data),
    //   () => console.log('Error downloading the file.'),
    //   () => console.info('OK');
    window.location.href='localhost:8036/demandes/reporting/2022/';

  }

  downloadFile(data: Object) {
    // @ts-ignore
    const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
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
    return this.httpClient.post<Array<Demande>>(this.url+'criteres/',obj);
  }

}
