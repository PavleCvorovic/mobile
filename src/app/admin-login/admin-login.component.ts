import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder} from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { AdminGuardGuard } from '../admin-guard.guard';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public fb:FormBuilder, public http:HttpClient, public router:Router, public guard:AdminGuardGuard, public cookieService:CookieService, public s:ServisService) { }

  unos_admin = this.fb.group(
  {
    username:'',
    password:''
  });

  ngOnInit(): void {
    if(this.s.token != "")
  {
    this.guard.logovan = true;
    this.router.navigate(['/admin']);
  }

  }
  // token:string;

  submit()
  {
      this.http.post('http://polovni-telefoni.tk/laravel/public/api/login', this.unos_admin.getRawValue(),{withCredentials:true})
        .subscribe((result: any)=>
      {
        this.cookieService.set('test', result.message);
        this.s.token = this.cookieService.get('test');
        // window.console.log(this.cookieService.getAll());
        this.guard.logovan = true;
        this.router.navigate(['admin']);
      });

  }


}
