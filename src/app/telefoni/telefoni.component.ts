import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

import { ActivatedRoute, Params, Router} from '@angular/router';
import {Servis1Service} from "../servis1.service";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {
pokazivac_marke:number=0;
marka :string ;
model:string;
objava:string;
dropmodel:boolean=false;
telefonifix:any;
neznamdjesam:boolean=false;
  constructor(public s:ServisService ,public route:ActivatedRoute,public s1:Servis1Service,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.s.dajtelefone();
    this.s.dajpostove();
    this.s.dajmarku();




  }

postaviPost(){

    this.s.posts.tekst=this.objava
  this.s.dodajPost();
  alert('Dodat oglas, batali da kucas!!!');
  this.objava="";

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
