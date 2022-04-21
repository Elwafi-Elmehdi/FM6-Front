import {Enfant} from "./enfant";

export class Demande {



  id:number|undefined;
  rib:string|undefined;
  province:string|undefined;
  reference:string|undefined;
  score:number|undefined;
  age:number|undefined;
  nom:string| undefined;
  anciennete:number|undefined;
  prenom:string|undefined;
  nomArabic:string|undefined;
  prenomArabic:string|undefined;
  cin:string|undefined;
  naissance:string|undefined;
  adherentCode:string|undefined;
  telephone:string|undefined;
  adresseActualle:string|undefined;
  mosqueRef:string|undefined;
  mosque:string|undefined;
  dateJoindreMosque:string|undefined;
  environment:number|undefined;
  sf:number|undefined;
  fonction:number|undefined;
  logement:number|undefined;
  conditionPhysique:number|undefined;
  enfants:Array<Enfant>= new Array<Enfant>();
  createdAt:string|undefined;
}
