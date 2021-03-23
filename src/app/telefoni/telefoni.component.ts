import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {
marka :string ;
model:string;
objava:string;
  constructor(public s:ServisService) { }

  ngOnInit(): void {
    this.s.dajtelefone();
    this.s.dajpostove();


  }
postaviPost(){
    this.s.post.tekst=this.objava
this.s.dajVrijeme();
  this.s.dodajPost()


}




}
