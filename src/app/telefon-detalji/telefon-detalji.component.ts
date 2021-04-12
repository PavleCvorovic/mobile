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
 cpu:string='assets/cpu.png'
 mem:string='assets/memory.png'
 bat:string='assets/battery.png'
 cam:string='assets/camera.png'
 dis:string='assets/display.png'


  ngOnInit(): void {
 this.s.uzmiTelefonId(this.id);
    console.log(this.s.telefonId)



  }}
