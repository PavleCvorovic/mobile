import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {
marka :string ;
model:string;
objava:string;
  constructor(public s:ServisService ,private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.s.dajtelefone();
    this.s.dajpostove();


  }


postaviPost(){
    this.s.tekst=this.objava


  this.s.dodajPost()


}




}
