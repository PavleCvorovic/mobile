import { Component, OnInit } from '@angular/core';
import { NgModelGroup } from '@angular/forms';
import { FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  unos_admin = this.fb.group(
  {
    username:'',
    password:''
  });

  ngOnInit(): void {

  }

  submit()
  {
    let username = this.unos_admin.get('username').value;
    let password = this.unos_admin.get('password').value;
    console.log(username +" " +  password);

  }

}
