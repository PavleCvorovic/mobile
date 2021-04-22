import { Component, OnInit } from '@angular/core';
import {ServisService} from "../../servis.service";
import {ActivatedRoute} from "@angular/router";
import {Servis1Service} from "../../servis1.service";

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {

  constructor(public s:ServisService, public route: ActivatedRoute,public s1:Servis1Service) { }
  telefon_detalj:any=[];
  id = this.route.snapshot.params.id;
  provjera:number=this.id;

  ram_url:string= "assets/ram.png"
  cpu:string='assets/processor.png'
  mem:string='assets/memory.png'
  bat:string='assets/baterijaa.png'
  cam:string='assets/camera.png'
  dis:string='assets/display.png'
  i:number=0;
  promjena:number=0;
  sifra:"";


  ngOnInit(): void {
    this.s.uzmiTelefonId(this.id);
    console.log(this.s.telefonId)

  }

  brisanjePregled:boolean = false;
  postavi(id:number)
  {
    this.s.dodajTelefonAdmin(id);
  }

  obrisi(id:number){
    this.s.brisiTelefon(id);
    console.log(id);
  }

  PotvrdiBrisanje()
  {
    if(this.s.telefonId.sifra===this.sifra)
    {
      this.s.brisiTelefon(this.id);
      alert('uspjesno obrisan telefon!');
    }else{

      alert('Pogresna sifra');
      this.sifra = "";
    }


  }



}
