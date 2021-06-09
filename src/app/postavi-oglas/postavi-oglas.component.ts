import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {ServisService} from '../servis.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params, Router} from '@angular/router';

import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {coerceNumberProperty} from "@angular/cdk/coercion";
import Swal from 'sweetalert2/dist/sweetalert2.js';



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
otvoric:boolean=false;

  constructor(public s:ServisService, public router:Router,private http: HttpClient) { }

  @ViewChild('f') signupForm: NgForm;
file:any;
  file2:any;
  photo: any = {
    slika:"",
    telefon_id:""
  }
  slika:any;




  brojac = 0;

  currentRate: number ;
  ngOnInit(): void {
    this.s.uzmiSveTelefone();
    this.s.dajmarku();
    this.s.dajmodel();
    this.s.uzmiKonfiguracije();
    this.uzmiSlike();





  }









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




  postavislike() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('slika', this.photo.slika)
    params.append('telefon_id', this.photo.telefon_id);
    this.http
      .post('http://localhost:8000/api/file', params

      )


      .subscribe(posts => {

        console.log(this.urls.length);

        this.brojac++;
        if(this.urls.length-this.brojac == 1)
        {
          this.s.spinerOglas = false;
          Swal.fire('Hvala vam...', 'Ubrzo nakod pregleda od strane administracije vaš oglas će biti objavljen !', 'success')
          setTimeout(()=>{                           //<<<---using ()=> syntax
            window.location.reload();
        }, 1000);
        }
      })
  }



  slikeBaza11:any;

  uzmiSlike()
  {
    return this.http.get('http://localhost:8000/api/slike')
      .subscribe(posts=>
      {
        this.slikeBaza11 = posts;


      })
  }






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
urls=[];
prikazSlike=[];

  onChangeFile(event: any): void {

    {
      for(let i = 0; i<10;i++)
      {
        if(event.target.files)
        {
       let j = event.target.files[i];
       this.urls.push(j);
       var reader = new FileReader();
       reader.readAsDataURL(event.target.files[i]);
       reader.onload=(e:any)=>
       {
         this.prikazSlike.push(e.target.result);
       }

        }
      }


    }

  }



  postavi_parametre_ram(value){
    this.ram=value;

  }
  postavi_parametre_kamPrednja(value){
    this.kamera_prednja=value;
  }
  postavi_parametre_kamZadnja(value){
    this.kamera_zadnja=value;
  }
  postavi_parametre_memorija(value){
    this.memorija=value;
  }






  onSubmit(signupForm:NgForm)
  {
    if( this.cijena && this.opis && this.prodavac && this.kontakt && this.marka && this.sifra != null){
      if(this.urls.length>0)
      {





      this.s.models.marka_id = this.marka;
      this.s.konfiguracijeBaza.procesor = this.procesor;
      this.s.konfiguracijeBaza.ram= this.ram;
      this.s.konfiguracijeBaza.baterija= this.baterija;
      this.s.konfiguracijeBaza.kamera_zadnja=this.kamera_zadnja;
      this.s.konfiguracijeBaza.kamera_prednja=this.kamera_prednja;
      this.s.konfiguracijeBaza.ekran = this.ekran;
      this.s.konfiguracijeBaza.memorija = this.memorija;

      let conf = 0;
      this.s.dodajKonfiguracije();

      for(let i =0;i<this.s.specifikacije.length;i++)
      {

        if(conf<this.s.specifikacije[i].id)
        {
          conf = this.s.specifikacije[i].id;
        }
      }
      let t = 0;
      let idT = 0;

      for(let i =0;i<this.s.telefoniZaSlike.length;i++)
      {

        if(t<this.s.telefoniZaSlike[i].id)
        {
          t = this.s.telefoniZaSlike[i].id;
          idT = this.s.telefoniZaSlike[i].telefon_id;
        }
      }



      this.s.telefonBaza.specifikacije = conf + 1;
      var  x = Date();
      this.s.telefonBaza.mark_id = this.marka;
      this.s.telefonBaza.id = idT+1;

      this.s.telefonBaza.cijena = this.cijena;
      this.s.telefonBaza.opis = this.opis;

      this.s.telefonBaza.model = this.model
      this.s.telefonBaza.prodavac= this.prodavac;
      this.s.telefonBaza.kontakt = this.kontakt;
      this.s.telefonBaza.stanje = this.currentRate;
      this.s.telefonBaza.javno=0;
      this.s.telefonBaza.sifra = this.sifra;
this.s.telefonBaza.vrijeme=x;
      this.s.spiner=true;
      this.photo.slika = this.slika;
      this.photo.telefon_id = this.s.telefonBaza.id;

      console.log(this.kamera_prednja);


      this.s.dodajTelefon();





      t = t+1;

      for(let i = 0; i<this.urls.length;i++)
      {
        if(this.urls[i] == null)
        {
          break;
        }

        setTimeout(()=>{                           //<<<---using ()=> syntax
          this.photo.slika = this.urls[i];
        this.photo.telefon_id = t;
        this.postavislike();
     }, 3000);

      }



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




    }}else{
  Swal.fire('Izvinite..', 'Popunite sva polja naznačena *!', 'warning')
}









  }
}
