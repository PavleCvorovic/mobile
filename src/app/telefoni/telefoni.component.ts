import {Component, EventEmitter, OnInit} from '@angular/core';
import {ServisService} from '../servis.service';

import {ActivatedRoute} from '@angular/router';
import {Servis1Service} from "../servis1.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Options} from "ng5-slider";

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {

  value: number = 0;
  highValue: number = 2000;
  options: Options = {
    floor: 0,
    ceil: 2000
  }
  pokazivac_marke: number = 0;
  marka: string;
  model: string;
  objava: string;
  dropmodel: boolean = false;
  nextTelefon: boolean = false;
  pageSize = 5;
  total = 16;
  p = 1;
  pageChange: EventEmitter<number>;

  constructor(public s: ServisService, public route: ActivatedRoute, public s1: Servis1Service) {
  }

  ngOnInit(): void {


    this.objava = ''
    this.s.dajtelefone();
    this.s.dajpostove();
    this.s.dajmarku();


  }

  postaviPost() {

    if (this.objava !== '') {
      this.s.posts.tekst = this.objava
      this.s.dodajPost();
      this.objava = "";
      Swal.fire('Hvala vam...', 'Ubrzo nakod pregleda od strane administracije vaš oglas će biti objavljen !', 'success')
    } else {
      Swal.fire('Zao nam je...', 'Pokušali ste da postavite prazan oglas !', 'error')
    }
    this.objava = "";
  }


  prenos(value) {

    this.s.dajmodelmarke(value);
this.s1.filter.marka_id=value;
if(this.s1.filter.model_naziv!=''){
  this.s1.filter.model_naziv='';
}

  }

  postavi_parametre(value){
    this.s1.filter.model_naziv=value;


  }
  postavi_parametre_cijena(){
    this.s1.filter.cijena_min=this.value;
    this.s1.filter.cijena_max=this.highValue;

  }
  filtriraj(){
    this.s1.filtriraj();

this.pokazivac_marke=1;
  }
resetuj(){
    this.pokazivac_marke=0;
  this.s1.filter.cijena_min=0;
  this.s1.filter.cijena_max=2000;

}


}
