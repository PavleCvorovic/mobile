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

ram_url:string='data:image/png;base64,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';
 cpu:string='https://img.flaticon.com/icons/png/512/1892/1892518.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
 mem:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_I5LusD2YXWs2N8QJXO2PfXjQwMdAzO17Q&usqp=CAU'
 bat:string='https://lh3.googleusercontent.com/proxy/9efXkQXUdGy0Pe_Sd3vmzqyon58SRuINrIJ4DFps-cOTvTa3j88JS3SeEUeH2JejFy1W9KgEcuyEkCZpBL3YXEqKo8uqpcSmRngDozo10OI7EQ'
 cam:string='https://lh5.googleusercontent.com/proxy/SrFoEj_6qm6B0x6RFdoVE2HFO6AU8xnj3yrjsVFwwRxiYNy-Ju740Z9ioxramS_JuHNm_QMhT3KO3ULnMfHY_9H-KWw=s0-d'
 dis:string='https://img2.pngio.com/display-inches-mobile-phone-screen-size-smartphone-icon-display-size-png-512_512.png'


  ngOnInit(): void {
 this.s.uzmiTelefonId(this.id);
    console.log(this.s.telefonId)



  }}
