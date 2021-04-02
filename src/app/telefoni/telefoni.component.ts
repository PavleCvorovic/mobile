import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

import { ActivatedRoute, Params, Router} from '@angular/router';
import {Servis1Service} from "../servis1.service";


@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {
pokazivac_marke:boolean=false;
marka :string ;
model:string;
objava:string;


  constructor(public s:ServisService ,public route:ActivatedRoute,public s1:Servis1Service) { }

  ngOnInit(): void {
    this.s.dajtelefone();
    this.s.dajpostove();
    this.s.dajmarku();


  }


postaviPost(){

    this.s.posts.tekst=this.objava




  this.s.dodajPost()

}

proslijedimarku(id){
    this.s1.dajtelefonpomarci(id);
    this.pokazivac_marke=true;
  console.log(this.s1.tel_marka_id)

}




}
