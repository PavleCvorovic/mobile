import { Component, OnInit } from '@angular/core';
import { NgModelGroup } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public fb:FormBuilder, public http:HttpClient, public router:Router) { }

  unos_admin = this.fb.group(
  {
    username:'',
    password:''
  });

  ngOnInit(): void {

  }

  submit()
  {
      this.http.post('http://localhost:8000/api/login', this.unos_admin.getRawValue(),{withCredentials:true}).
      subscribe(()=>
      this.router.navigate(['admin']));

  }

}
