import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';
import { ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-telefon-detalji',
  templateUrl: './telefon-detalji.component.html',
  styleUrls: ['./telefon-detalji.component.css']
})
export class TelefonDetaljiComponent implements OnInit {

  constructor(public s:ServisService, public route: ActivatedRoute) { }
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
  obrisi()
  {
    this.brisanjePregled=true;
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
