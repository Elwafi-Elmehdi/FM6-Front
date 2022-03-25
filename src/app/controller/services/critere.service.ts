import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Critere} from "../models/critere";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CritereService {

  constructor(private httpClient:HttpClient) { }
  private _critere:Critere|undefined;

  private url = environment.urlBase+'/criteres/';

  public getCritereGlobale():Observable<Critere> {
    return this.httpClient.get<Critere>(this.url+'global');
  }
  public updateCritereGlobale(critere:Critere):Observable<Critere>{
    return this.httpClient.put<Critere>(this.url,critere);
  }
  get critere(): Critere | undefined {
    return this._critere;
  }


}
