import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public s:ServisService, public router:Router, public http:HttpClient) { }

  ngOnInit(): void {
  }

  odjavi()
  {
    this.s.logged= false;
    this.http.post('http://localhost:8000/api/logout',{},{withCredentials:true})
    .subscribe(()=>
    {

    })
  }

}
