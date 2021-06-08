import { AdminGuardGuard } from './admin-guard.guard';
import { ServisService } from './servis.service';
import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobileShop';
  constructor(public cookie:CookieService, public s:ServisService, public guard: AdminGuardGuard) {
  }
  // OnInit()
  // {
  //   if(this.s.token != "")
  //   {
  //     this.guard.logovan = true;
  //   }
  // }
}
