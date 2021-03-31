import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';
import {Servis1Service} from "../servis1.service";

@Component({
  selector: 'app-admin-bord',
  templateUrl: './admin-bord.component.html',
  styleUrls: ['./admin-bord.component.css']
})
export class AdminBordComponent implements OnInit {
  telefon_oglas:boolean=false;
  telefoni_provjera:number=0;
  postovi_provjera:number=0;


  constructor(public  s:ServisService,public s1: Servis1Service) { }

  ngOnInit(): void {
    this.s.dajtelefone();
    this.s.dajpostove();

    this.s.broji_postove()
    this.s.broji_telefone()



  }
obrisi(id:number){
    this.s.brisiTelefon(id);
  console.log(id);
}

postavi(id:number)
{
  this.s.dodajTelefonAdmin(id);
}

obrisi2(id:number){
    this.s.obrisiPost(id)

}
postavi2(id:number){
this.s.dodajOglasAdmin(id);
}



broji_telefone(){
    for (let i=0; i<this.s.telefoni.length;i++){
      if (this.s.telefoni[i].javno===0){
       this.telefoni_provjera=this.telefoni_provjera+1;
      }
    }




}
broji_postove() {
  for (let i = 0; i < this.s.postovi.length; i++) {
    if (this.s.postovi[i].javno === null) {
      this.postovi_provjera = this.postovi_provjera + 1;


    }
  }
}}
