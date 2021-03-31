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




  ngOnInit(): void {
    this.s.uzmiTelefonId(this.id);
    console.log(this.s.telefonId)



  }}
