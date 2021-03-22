import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-modeli',
  templateUrl: './modeli.component.html',
  styleUrls: ['./modeli.component.css']
})
export class ModeliComponent implements OnInit {
marka:string;
  constructor(public s:ServisService) { }
novi:any;
  ngOnInit(): void {
    this.novi = this.pronadji()



  }

  pronadji(){

    for(let i=0;i<this.s.telefoni.length;i++){

      for(let b=0;i<this.s.marke.length;b++){
        if(this.s.telefoni[i].kategorija === this.s.marke[b].id){
          this.marka=this.s.marke[b].marka_naziv;
         return this.s.marke[b].marka_naziv;
        }
      }
}}}
