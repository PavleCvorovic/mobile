import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-admin-bord',
  templateUrl: './admin-bord.component.html',
  styleUrls: ['./admin-bord.component.css']
})
export class AdminBordComponent implements OnInit {

  constructor(private  s:ServisService) { }

  ngOnInit(): void {
    this.s.dajtelefone();

  }
obrisi(id:number){
    this.s.brisiTelefon(id);



}




}
