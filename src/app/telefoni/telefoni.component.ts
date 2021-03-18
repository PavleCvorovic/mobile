import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {

  constructor(public a:ServisService) { }

  ngOnInit(): void {
    this.a.dajtelefone();
    console.log(this.a.telefoni);
  }

}
