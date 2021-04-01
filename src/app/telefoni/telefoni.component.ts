import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';
import {DatePipe} from '@angular/common';
import { ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {

marka :string ;
model:string;
objava:string;


  constructor(public s:ServisService ,private datePipe:DatePipe,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.s.dajtelefone();
    this.s.dajpostove();
    this.s.dajmarku();


  }


postaviPost(){

    this.s.posts.tekst=this.objava




  this.s.dodajPost()

}






}
