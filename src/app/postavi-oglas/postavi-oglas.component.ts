import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-postavi-oglas',
  templateUrl: './postavi-oglas.component.html',
  styleUrls: ['./postavi-oglas.component.css']
})
export class PostaviOglasComponent implements OnInit {

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
  datum_objave= new Date;
  datum_isteka= new Date;
  slika1 = 'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';
  slika2 = 'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';
  slika3 ='https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg';




  onSubmit(signupForm:NgForm)
  {
    
    // this.s.telefonBaza.cijena = this.cijena;
    // this.s.telefonBaza.opis = this.opis;
    // this.s.telefonBaza.prodavac= this.prodavac;
    // this.s.telefonBaza.kontakt = this.kontakt;
    // this.s.telefonBaza.mark_id = this.marka;
    // this.s.telefonBaza.konfiguracije=this.konfiguracije;
    // this.s.telefonBaza.datum_objave=this.datum_objave;
    // this.s.telefonBaza.datum_isteka=this.datum_isteka;
    // console.log(this.s.telefonBaza.datum_objave);
    



    // console.log(this.s.telefonBaza);
    // this.s.dodajTelefon();
    this.s.model_ime = this.cijena;
    console.log(this.s.model_ime);
    
    this.s.dodajModel();
    
    
  }





}
