import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-admin-bord',
  templateUrl: './admin-bord.component.html',
  styleUrls: ['./admin-bord.component.css']
})
export class AdminBordComponent implements OnInit {

  constructor(public  s:ServisService) { }

  ngOnInit(): void {
    this.s.dajtelefone();
    this.s.dajpostove();

  }
obrisi(id:number){
    this.s.brisiTelefon(id);
  console.log(id);
}

postavi(id:number)
{
  this.s.dodajTelefonAdmin(id);
}

obrisiOglas(id)
{
  this.s.obrisiPost(id);
}




}
