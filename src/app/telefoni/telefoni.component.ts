import { Component, EventEmitter, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

import { ActivatedRoute} from '@angular/router';
import {Servis1Service} from "../servis1.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Options} from "ng5-slider";

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {
  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 2000}
pokazivac_marke:number=0;
marka :string ;
model:string;
objava:string;
dropmodel:boolean=false;
nextTelefon:boolean=false;
  pageSize=5;
  total= 16;
  p=1;

  constructor(public s:ServisService ,public route:ActivatedRoute,public s1:Servis1Service) { }

  ngOnInit(): void {


  this.s.dajtelefone();
    this.s.dajpostove();
    this.s.dajmarku();
    this.s.dajmodel();




  }
  pageChange: EventEmitter<number>;

postaviPost(){

if(this.objava!=='') {
  this.s.posts.tekst = this.objava
  this.s.dodajPost();
  this.objava = "";
  Swal.fire('Hvala vam...', 'Ubrzo nakod pregleda od strane administracije vaš oglas će biti objavljen !', 'success')
}else {
  Swal.fire('Zao nam je...', 'Pokušali ste da postavite prazan oglas !', 'error')
}
  this.objava = "";
}




proslijedimarku(id){
    this.s1.dajtelefonpomarci(id);
    this.pokazivac_marke=1;
    this.s1.dajmodelmarke(id);
    if(this.dropmodel===false){
      this.dropmodel=true;

    }
    else {
      this.dropmodel=false;

}


}
    prosilijedinaziv(naziv){
      this.s1.dajtelefonpomodelu(naziv)
        this.pokazivac_marke=2;

    }



}
