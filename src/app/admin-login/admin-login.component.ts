import { Component, OnInit } from '@angular/core';
import { NgModelGroup } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { AdminGuardGuard } from '../admin-guard.guard';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public fb:FormBuilder, public http:HttpClient, public router:Router, public guard:AdminGuardGuard) { }

  unos_admin = this.fb.group(
  {
    username:'',
    password:''
  });

  ngOnInit(): void {

  }

  submit()
  {
      this.http.post('http://localhost:8000/api/login', this.unos_admin.getRawValue(),{withCredentials:true}).subscribe(()=>
      {

      });
      this.guard.logovan = true
      this.router.navigate(['admin']);
  }

}
