import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {ServisService} from '../servis.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {Servis1Service} from "../servis1.service";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {coerceNumberProperty} from "@angular/cdk/coercion";




@Component({
  selector: 'app-postavi-oglas',
  templateUrl: './postavi-oglas.component.html',
  styleUrls: ['./postavi-oglas.component.css']
})
export class PostaviOglasComponent implements OnInit {
promjena1:boolean=false;
upozorenje_selekt=false;
prilagodjeni_modeli:any=[];
fajl:any;
path:any;
spiner:boolean=false;
strike:boolean=true;
photos1:any;
photos2:any;
photos3:any;
  constructor(public s:ServisService, public router:Router,public s1:Servis1Service,private http: HttpClient) { }

  @ViewChild('f') signupForm: NgForm;
file:any;
  file2:any;
  file3:any;
  ngOnInit(): void {
    this.s.dajmarku();
    this.s.dajmodel();
    this.s.uzmiKonfiguracije();
    this.s1.uzmiSlike();




  }
  slika1:any;


  marka='';
  opis='';
  cijena='';
  model:'';
  prodavac='';
  kontakt='';
  specifikacije='';
  javno=1;

  procesor='';
  baterija='';
  ram='';
  kamera_zadnja='';
  kamera_prednja='';
  ekran="";
  memorija='';
  sifra:"";





marka_model(){
  let a:number;
 a=Number(this.marka);

let b:any=[];
   for (let i=0 ;i<this.s.modeli.length; i++) {
     if (a === this.s.modeli[i].marka_id) {
      b.push( this.s.modeli[i].model_naziv)

     }
     this.prilagodjeni_modeli=b;

   }
   if (this.marka === ''){
   this.upozorenje_selekt=true;
   }
   else{
     this.upozorenje_selekt=false;
   }
}
photo:any=
{
  slika1:'',
  slika2:'',
  slika3:''
}

  onChangeFile(event: any): void {

    this.s.telefonBaza.slike = event.target.files[0];
  }
  onChangeFile1(event: any): void {
    this.photo.slika2 = event.target.files[0];
  }
  onChangeFile2(event: any): void {
    this.photo.slika3 = event.target.files[0];
  }








  onSubmit(signupForm:NgForm)
  {
    if( this.cijena && this.opis && this.prodavac && this.kontakt && this.marka && this.sifra  != null){
      this.promjena1=true;

      this.s.models.marka_id = this.marka;
      this.s.konfiguracijeBaza.procesor = this.procesor;
      this.s.konfiguracijeBaza.ram= this.ram;
      this.s.konfiguracijeBaza.baterija= this.baterija;
      this.s.konfiguracijeBaza.kamera_zadnja=this.kamera_zadnja;
      this.s.konfiguracijeBaza.kamera_prednja=this.kamera_prednja;
      this.s.konfiguracijeBaza.ekran = this.ekran;
      this.s.konfiguracijeBaza.memorija = this.memorija;

      // console.log(this.s.konfiguracije.length);
      let conf = 0;
      this.s.dodajKonfiguracije();

      // this.s.telefonBaza.konfiguracije=this.s.konfiguracijeBaza.id;
      // console.log(this.s.telefonBaza.konfiguracije);
      for(let i =0;i<this.s.specifikacije.length;i++)
      {
        // if(this.s.konfiguracijeBaza.procesor == this.s.specifikacije[i].procesor)
        // {
        //   // console.log(this.s.konfiguracijeBaza.procesor);
        //   // console.log(this.s.konfiguracije[i].procesor);
        //   conf = this.s.specifikacije[i].id;
        // }
        if(conf<this.s.specifikacije[i].id)
        {
          conf = this.s.specifikacije[i].id;
        }
      }
      console.log(conf+1);

      // let sl = 0;
      // this.slike();

    //  console.log(this.s.telefonBaza.konfiguracije);


      this.s.telefonBaza.specifikacije = conf + 1;

      this.s.telefonBaza.mark_id = this.marka;


      this.s.telefonBaza.cijena = this.cijena;
      this.s.telefonBaza.opis = this.opis;

      this.s.telefonBaza.model = this.model
      this.s.telefonBaza.prodavac= this.prodavac;
      this.s.telefonBaza.kontakt = this.kontakt;
      this.s.telefonBaza.javno=0;
      this.s.telefonBaza.sifra = this.sifra;
      this.s.spiner=true;



      this.s.dodajTelefon();


      this.procesor = "";
      this.baterija='';
      this.ram='';
      this.kamera_prednja='';
      this.kamera_zadnja='';
      this.memorija='';
      this.ekran="";
      this.marka='';
      this.opis='';
      this.cijena='';
      this.model='';
      this.prodavac='';
      this.kontakt='';
      this.specifikacije='';

      console.log(this.s.telefonBaza);



    }else{

        alert('Popunite sva polja u formi.')
    }
    // this.s.models.model_ime = this.cijena;
    // console.log(this.s.models.model_ime);

    // this.s.dodajModel();





  }










}
