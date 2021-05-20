import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-telefon-detalji',
  templateUrl: './telefon-detalji.component.html',
  styleUrls: ['./telefon-detalji.component.css']
})
export class TelefonDetaljiComponent implements OnInit {

  constructor(public s:ServisService, public route: ActivatedRoute,protected http:HttpClient) {

  }

  telefon  = {};
  id = this.route.snapshot.params.id;

  brisanjePregled:boolean = false;
ram_url:string= "assets/ram.png"
 cpu:string="assets/processor.png"
 mem:string="assets/memory.png"
 bat:string="assets/baterijaa.png"
 cam:string="assets/camera.png"
 dis:string="assets/display.png"
  i:number=0;
promjena:number=0;
  sifra:string="";
stanje:number;

  ngOnInit(): void {


    this.pozovi();

  }


  pozovi() {
    this.s.getTelefonId(this.id).subscribe(data => {
      this.telefon = data;
    this.stanje=this.telefon[0].stanje

    })
  }

  obrisi()
  {
    this.brisanjePregled=true;
  }
  PotvrdiBrisanje()
  {
    if(this.telefon[0].sifra===this.sifra)
    {
      this.s.brisiTelefon(this.id);
      alert('uspjesno obrisan telefon!');
    }else{

      alert('Pogresna sifra');
      this.sifra = "";
    }


  }



}
