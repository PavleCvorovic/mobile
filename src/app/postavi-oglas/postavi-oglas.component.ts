import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {ServisService} from '../servis.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-postavi-oglas',
  templateUrl: './postavi-oglas.component.html',
  styleUrls: ['./postavi-oglas.component.css']
})
export class PostaviOglasComponent implements OnInit {
promjena1:boolean=false;

  constructor(public s:ServisService) { }

  @ViewChild('f') signupForm: NgForm;

  ngOnInit(): void {
    this.s.dajmarku();
  }

  marka='';
  opis='';
  cijena='';
  prodavac='';
  kontakt='';
  konfiguracije='';
  datum_objave=new Date();
  datum_isteka=new Date();
  slika1 = 'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';
  slika2 = 'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';
  slika3 ='https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';




  onSubmit(signupForm:NgForm)
  {

     this.s.telefonBaza.cijena = this.cijena;
     this.s.telefonBaza.opis = this.opis;
     this.s.telefonBaza.prodavac= this.prodavac;
     this.s.telefonBaza.kontakt = this.kontakt;
     this.s.telefonBaza.mark_id = this.marka;
     this.s.telefonBaza.konfiguracije=this.konfiguracije;
      // console.log(this.datum_isteka.DatePipe.transform());


     this.s.dodajTelefon();
     this.fun1()



  }
fun1(){
if( this.cijena && this.opis && this.prodavac && this.kontakt && this.marka && this.konfiguracije != null){
this.promjena1=true;

this.cijena
  this.opis='';
  this.prodavac='';
  this.konfiguracije='';
  this.kontakt='';
  this.marka='';
  this.konfiguracije='';
  this.cijena='';






}
else {
  alert('Popunite sva polja u formi.')

}
}




}
