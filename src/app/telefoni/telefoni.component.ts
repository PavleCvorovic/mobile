import {Component, EventEmitter, OnInit} from '@angular/core';
import {ServisService} from '../servis.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Servis1Service} from "../servis1.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Options} from "ng5-slider";
import { HttpParams } from '@angular/common/http';
import {
  HttpClient,
  HttpHeaders,
  HttpEventType
} from '@angular/common/http';

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {
vreme:string[];
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
  pageSize = 5;
  total = 16;
  p = 1;
  starRating = 0;

  constructor(public s: ServisService, public route: ActivatedRoute, public s1: Servis1Service, public fb:FormBuilder, public http:HttpClient) {
  }

  ngOnInit(): void {

    this.objava = ''
    this.s.dajtelefone();
    this.s.dajpostove();
    this.s.dajmarku();
    this.time()
    console.log(this.vreme)
  }
  question=this.fb.group({
    email:'',
    poruka:''
  })

  pitaj()
  {
    const params = new HttpParams()

    let pitanje =
    {
      email:this.question.value.email,
      poruka:this.question.value.poruka
    }

    if(pitanje.poruka=='' || pitanje.email=='' || pitanje.poruka==null ||pitanje.email==null)
    {

      Swal.fire('Upss...', 'Morate popuniti oba polja !', 'warning')
     this.question.reset()
      pitanje.poruka=''
      pitanje.email=''
    }
    else{
    this.http
      .post(
        'http://localhost:8000/api/mail-salji', pitanje

      )   .subscribe(responseData =>
    {

      Swal.fire('Hvala vam...', 'Uspjesno ste postavili pitanje, admin će Vam ubrzo odgovoriti !', 'success')
 this.question.reset();
      this.question.value.email=''
      this.question.value.poruka=''
    })}
  }

 time(){
   let today = new Date()
 for (let a of this.s.telefoni){
   let newdate =new Date(a.vrijeme)
   if(newdate.getDay()==today.getDay()&&newdate.getMonth()==today.getMonth()&&today.getFullYear()===newdate.getFullYear()){
    this.vreme[0]='danas';
   }

 }
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
  postavi_parametre_ram(value){
    this.s1.filter.ram=value;

  }
  postavi_parametre_kamPrednja(value){
    this.s1.filter.prednja=value;
  }
  postavi_parametre_kamZadnja(value){
    this.s1.filter.zadnja=value;
  }
  postavi_parametre_memorija(value){
    this.s1.filter.memorija=value;
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
