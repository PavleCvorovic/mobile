import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { url } from 'node:inspector';

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
 cpu:string='https://img.flaticon.com/icons/png/512/1892/1892518.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
 mem:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_I5LusD2YXWs2N8QJXO2PfXjQwMdAzO17Q&usqp=CAU'
 bat:string='https://lh3.googleusercontent.com/proxy/9efXkQXUdGy0Pe_Sd3vmzqyon58SRuINrIJ4DFps-cOTvTa3j88JS3SeEUeH2JejFy1W9KgEcuyEkCZpBL3YXEqKo8uqpcSmRngDozo10OI7EQ'
 cam:string='https://lh5.googleusercontent.com/proxy/SrFoEj_6qm6B0x6RFdoVE2HFO6AU8xnj3yrjsVFwwRxiYNy-Ju740Z9ioxramS_JuHNm_QMhT3KO3ULnMfHY_9H-KWw=s0-d'
 dis:string='https://img2.pngio.com/display-inches-mobile-phone-screen-size-smartphone-icon-display-size-png-512_512.png'


  ngOnInit(): void {
 this.s.uzmiTelefonId(this.id);
    console.log(this.s.telefonId)



  }}
