import { Component, OnInit } from '@angular/core';
import {ServisService} from "../../servis.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {

  constructor(public s:ServisService, public route: ActivatedRoute) { }

  id = this.route.snapshot.params.id;
telefon={};

  ram_url:string= "assets/ram.png"
  cpu:string='assets/processor.png'
  mem:string='assets/memory.png'
  bat:string='assets/baterijaa.png'
  cam:string='assets/camera.png'
  dis:string='assets/display.png'
  promjena:number=0;



  ngOnInit(): void {
this.pozovi();


  }
  pozovi() {
    return this.s.getTelefonId(this.id).subscribe(data => {
      this.telefon = data;
      console.log(data);
    })
  }

  postavi()
  {
    this.s.dodajTelefonAdmin(this.id);
  }

  obrisi(){
    this.s.brisiTelefon(this.id);

  }






}
