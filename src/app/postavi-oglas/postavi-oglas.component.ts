import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {ServisService} from '../servis.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params, Router} from '@angular/router';




@Component({
  selector: 'app-postavi-oglas',
  templateUrl: './postavi-oglas.component.html',
  styleUrls: ['./postavi-oglas.component.css']
})
export class PostaviOglasComponent implements OnInit {
promjena1:boolean=false;
upozorenje_selekt=false;
prilagodjeni_modeli:any=[];
  constructor(public s:ServisService, public router:Router) { }

  @ViewChild('f') signupForm: NgForm;



  ngOnInit(): void {
    this.s.dajmarku();
    this.s.dajmodel()

  }

  marka='';
  opis='';
  cijena='';
  model:'';
  prodavac='';
  kontakt='';
  konfiguracije='';
  javno=1;
  slika1 = 'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';
  slika2 = 'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';
  slika3 ='https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';





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




  onSubmit(signupForm:NgForm)
  {
    if( this.cijena && this.opis && this.prodavac && this.kontakt && this.marka && this.konfiguracije != null){
      this.promjena1=true;
     this.s.telefonBaza.cijena = this.cijena;
     this.s.telefonBaza.opis = this.opis;
     this.s.telefonBaza.prodavac= this.prodavac;
     this.s.telefonBaza.kontakt = this.kontakt;
     this.s.telefonBaza.mark_id = this.marka;
     this.s.telefonBaza.konfiguracije=this.konfiguracije;
     this.s.telefonBaza.sifra = 'aaa';
     this.s.telefonBaza.slika_id = 1;
     this.s.telefonBaza.model = 'dasdasdas'
     this.s.telefonBaza.javno=0;
      this.s.models.marka_id = this.marka;





    // this.s.dodajModel();


     this.s.dodajTelefon();



    }else{

        alert('Popunite sva polja u formi.')
    }
    // this.s.models.model_ime = this.cijena;
    // console.log(this.s.models.model_ime);

    // this.s.dodajModel();





  }










}
