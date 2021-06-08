import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminGuardGuard } from '../admin-guard.guard';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public s:ServisService, public router:Router, public http:HttpClient, public cookieService:CookieService, public guard:AdminGuardGuard) { }

  ngOnInit(): void {
  }

  odjavi()
  {



    this.http.post('http://localhost:8000/api/logout',{},{withCredentials:true})
    .subscribe(()=>
    {
      this.cookieService.deleteAll();
      this.guard.logovan = false;
      this.s.logged= false;
    })
  }

}
