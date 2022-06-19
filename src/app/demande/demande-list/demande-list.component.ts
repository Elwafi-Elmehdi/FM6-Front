import {Component, OnInit, ViewChild} from '@angular/core';
import {DemandeService} from "../../controller/services/demande.service";
import {Demande} from "../../controller/models/demande";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../controller/services/authentication.service";
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {Toast} from 'bootstrap';
@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  constructor(private service:DemandeService,private authService:AuthenticationService,private router:Router) {
    
   }
  public demande:Demande|undefined;
  
  public demandes:Array<Demande> = new Array<Demande>();
  public currentPage = 0;
  public totalPages = 1;
  public hasNext = false;
  public first = true;
  public last = true;
  public hasPrevious = false;
  public arraya:Array<number> = [];

  public filterObj = {
    age: null,
    cin:null,
    fonction:null,
    adherentCode:null,
    telephone:null,
    anciennete:null
  }
  public year = new Date().getFullYear();

  ngOnInit(): void {
    this.toast=new Toast(this.toastEl.nativeElement,{})
    this.generateYears()
    this.service.getDemandes(null).subscribe(res => {

      // @ts-ignore
      this.totalPages = <number> res["totalPages"] ;
      // @ts-ignore
      this.first = res.first;
      // @ts-ignore
      this.last = res.last;
      // @ts-ignore
      this.currentPage = res.number;
      // @ts-ignore
      this.demandes = <Array<Demande>> res["content"];
      this.generatePagination();
    })
  }

  public pagination(index:any) {

    this.filterObj ={
      age: null,
      cin:null,
      fonction:null,
      adherentCode:null,
      telephone:null,
      anciennete:null
    }

    this.service.getDemandes(index).subscribe(res => {
      // @ts-ignore
      this.totalPages = <number> res["totalPages"] ;
      // @ts-ignore
      this.first = res.first;
      // @ts-ignore
      this.last = res.last;
      // @ts-ignore
      this.currentPage = res.number;
      // @ts-ignore
      this.demandes = <Array<Demande>> res["content"];
      if (this.demandes.length < 12){
        this.arraya == null;
      }
    })
  }


  recherche() {
    this.service.searchDemandeByCriteria(this.filterObj).subscribe(res => {
      // @ts-ignore
      this.totalPages = <number> res["totalPages"] ;
      // @ts-ignore
      this.first = res.first;
      // @ts-ignore
      this.last = res.last;
      // @ts-ignore
      this.currentPage = res.number;
      // @ts-ignore
      this.demandes = <Array<Demande>> res["content"];
      this.arraya  = new Array<number>();
      this.generatePagination();

    })
  }

  getLink(demande:Demande) {
   this.service.demande = demande;
   this.router.navigate(['/demandes/creer'])
  }

  isAdmin() {
    return this.authService.user.role ==='ROLE_ADMIN' ? true : false;
  }
  generateYears(): Array<Number> {
    const currentDate = new Date();
    let years = [currentDate.getFullYear()]
    for (let i = 0; i < 5; i++) {
      years.push(years[i]-1)
    }
    return years;
  }

  getReport(year:number){
    if(year !== null||undefined){
    this.service.getReport(year).subscribe(data => {
      this.downloadFile(data)
    });
    }
  }

  downloadFile(data: Object) {
    // @ts-ignore
    const blob = new Blob([data], { type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
    window.URL.revokeObjectURL(url);
  }

  setYear(year: Number) {
    this.year = year.valueOf();
  }

  prev() {
    this.pagination(this.currentPage-1);
  }
  next() {
    this.pagination(this.currentPage+1);
  }
  generatePagination() {
    for (let i = 0; i < this.totalPages ; i++) {
      this.arraya.push(i);
    }
  }

  @ViewChild('myToast',{static:true}) toastEl: any
  isClosed(){
    return !this.toastEl.nativeElement.classList.contains('show')
  }
  toast:any
  toggle() {
    this.toast.show();
  }
  untoggle() {
    this.toast.hide();
  }
  processDemande(id:any) {
    this.service.demande = this.demandes.find(d => d.id ===id);
    this.toggle();
  }

  process() {

  }
}
