import {Component, EventEmitter, OnInit} from '@angular/core';
import {ServisService} from '../servis.service';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Options} from "ng5-slider";
import { HttpParams } from '@angular/common/http';
import {
  HttpClient,

} from '@angular/common/http';

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {
  spiner: boolean = false;
  telefoni: any = [];

  prikaz: boolean = false;
  duzinatelefona: number;

  telefoniZaCijenu: any = [];
  telefoniZaCijenuObrnuto: any = []
  sort = 0;


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

  constructor(public s: ServisService, public route: ActivatedRoute, public fb:FormBuilder, public http:HttpClient, public router:Router) {
  }

  ngOnInit(): void {
    console.log(this.s.token + " token")

    this.objava = ''
    this.dajtelefone();

    this.s.dajpostove();
    this.s.dajmarku();
    this.time()
    console.log(this.vreme)
  }
  question=this.fb.group({
    email:'',
    poruka:''
  })






  dajtelefone() {
    this.spiner = true;
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/telefoni')


      .subscribe(posts => {

        this.telefoni = posts;
        this.telefoni.reverse();
        this.s.telefoni=this.telefoni
        console.log(this.telefoni)
        this.spiner = false;
        let i;
        this.duzinatelefona = this.telefoni.length
        if (this.telefoni.length === 0) {
          this.prikaz = true
        } else {

          this.prikaz = false;


        }
        var timeD: number[] = [];
        for (let i = 0; i < 31; i++) {
          timeD[i] = i;
        }

        let today = new Date()
        for (let i = 0; i < this.telefoni.length; i++) {
          let newdate = new Date(this.telefoni[i]?.vrijeme)
          var timepostH = newdate.getHours();
          var timenowH: number = today.getHours();
          var timepostM = newdate.getMinutes();
          var timenowM: number = today.getMinutes();
          var timenowD: number = today.getDay();
          var timepostD: number = newdate.getDay();
          var timenowMonth: number = today.getMonth();
          var timepostMonth: number = newdate.getMonth();

          var satiM, satiH, satiD, satiMonth;


          if (timenowM < timepostM) {
            timenowM = timenowM + 60
            timenowH = timenowH - 1;
            satiM = Math.abs(timenowM - timepostM);
          } else {
            satiM = timenowM - timepostM;
          }
          if (timenowH < timepostH) {
            timenowH = timenowH + 24;
            timenowD = timenowD - 1;
            satiH = Math.abs(timenowH - timepostH);
          } else {
            satiH = timenowH - timepostH;
          }


          if (timenowD < timepostD) {
            timenowD = timenowD + 31;

            satiD = timenowD - timepostD;
            satiD = 31 - satiD
          } else {
            satiD = timenowD - timepostD
          }
          if (timenowMonth - timepostMonth >= 3) {
            this.s.brisiTelefon(this.telefoni[i].id);
          } else {
            satiMonth = timenowMonth - timepostMonth;
          }


          if (timepostMonth == timenowMonth && timepostD == timenowD && timenowH == timepostH) {
            this.telefoni[i].okacen = '1';
            this.telefoni[i].vrijeme = "prije " + satiM + " min";
          } else if (timepostMonth == timenowMonth && timepostD == timenowD) {
            this.telefoni[i].okacen = '1';
            this.telefoni[i].vrijeme = "prije " + satiH + " h";

          } else if (timepostMonth == timenowMonth) {

            this.telefoni[i].vrijeme = "prije " + satiD + " dan";
          } else {
            this.telefoni[i].vrijeme = "prije " + satiMonth + " mjesec";
          }


        }

      })
  }

  filter:any ={
    marka_id:0,
    cijena_min:0,
    cijena_max:2000,
    model_naziv:'',
    ram:0,
    prednja:0,
    zadnja:0,
    memorija:0,
  }


  filtrirajj(){

    this.s.spiner=false;

    return this.http.post('http://polovni-telefoni.tk/laravel/public/api/filtrirajSve', this.filter)
      .subscribe(posts=>
      {

        this.telefoni=posts;

        this.duzinatelefona=this.telefoni.length



        this.telefoni.reverse();

        this.spiner=false;
        if (this.telefoni.length===0){
          this.prikaz=true
        }
        else {

          this.prikaz=false;


        }



        var timeD:number[]=[];
        for (let i=0;i<31;i++){
          timeD[i]=i;
        }

        let today = new Date()
        for (let i=0 ;i <this.telefoni.length;i++){
          let newdate =new Date(this.telefoni[i]?.vrijeme)
          var timepostH=newdate.getHours();
          var timenowH:number=today.getHours();
          var timepostM=newdate.getMinutes();
          var timenowM:number=today.getMinutes();
          var zbirM:number=timepostM+timenowM;
          var timenowD:number=today.getDay();
          var timepostD:number=newdate.getDay();
          var timenowMonth:number= today.getMonth();
          var timepostMonth:number = newdate.getMonth();

          var satiM,satiH,satiD,satiMonth;


          if (timenowM<timepostM){
            timenowM=timenowM+60
            timenowH=timenowH-1;
            satiM= Math.abs(timenowM-timepostM);
          }else {
            satiM = timenowM-timepostM;
          }


          if(timenowH<timepostH)
          {
            timenowH=timenowH+24;
            timenowD=timenowD-1;
            satiH= Math.abs(timenowH-timepostH);
          }else {
            satiH = timenowH- timepostH;
          }


          if(timenowD<timepostD)
          {
            timenowD = timenowD+31;

            satiD = timenowD-timepostD;
            timepostMonth = timepostMonth-1;
          }else
          {
            satiD = timenowD-timepostD
          }
          if(timenowMonth-timepostMonth >= 3)
          {
            this.s.brisiTelefon(this.telefoni[i].id);
          }else
          {
            satiMonth= timenowMonth - timepostMonth;
          }


          if(timepostMonth==timenowMonth && timepostD == timenowD && timenowH == timepostH)
          {
            this.telefoni[i].okacen='1';
            this.telefoni[i].vrijeme = "prije "+ satiM+ " min";
          }
          else if(timepostMonth==timenowMonth && timepostD == timenowD)
          {
            this.telefoni[i].okacen='1';
            this.telefoni[i].vrijeme = "prije " + satiH + " h";

          }else if(timepostMonth==timenowMonth)
          {

            this.telefoni[i].vrijeme = "prije " + satiD + " dan";
          }else
          {
            this.telefoni[i].vrijeme = "prije "+ satiMonth + " mjesec"
          }
        }
      })
  }

  sortCijena(value: any) {

    this.telefoniZaCijenu = this.telefoni


    for (let i = 0; i < this.telefoniZaCijenu.length; i++) {
      for (let j = 0; j < this.telefoniZaCijenu.length - 1; j++) {
        if (this.telefoniZaCijenu[j].cijena > this.telefoniZaCijenu[j + 1].cijena) {
          [this.telefoniZaCijenu[j], this.telefoniZaCijenu[j + 1]] = [this.telefoniZaCijenu[j + 1], this.telefoniZaCijenu[j]];
        }
      }
    }
    if (value == 0) {
      this.telefoni = this.telefoniZaCijenu;
    } else if (value == 1) {
      this.telefoniZaCijenuObrnuto = this.telefoniZaCijenu.reverse()
      this.telefoni = this.telefoniZaCijenuObrnuto;

      this.sort = 0;
    }
  }
















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
        'http://polovni-telefoni.tk/laravel/public/api/mail-salji', pitanje

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
this.filter.marka_id=value;
if(this.filter.model_naziv!=''){
  this.filter.model_naziv='';
}

  }

  postavi_parametre(value){
    this.filter.model_naziv=value;


  }
  postavi_parametre_cijena(){
    this.filter.cijena_min=this.value;
    this.filter.cijena_max=this.highValue;

  }
  postavi_parametre_ram(value){
    this.filter.ram=value;

  }
  postavi_parametre_kamPrednja(value){
    this.filter.prednja=value;
  }
  postavi_parametre_kamZadnja(value){
    this.filter.zadnja=value;
  }
  postavi_parametre_memorija(value){
    this.filter.memorija=value;
  }


  filtriraj(){
    this.filtrirajj();

this.pokazivac_marke=1;
  }
resetuj(){
    this.pokazivac_marke=0;
    this.filter.cijena_min=0;
    this.filter.cijena_max=2000;

}






}
