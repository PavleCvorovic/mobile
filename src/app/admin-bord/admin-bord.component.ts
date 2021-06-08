import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';
import {Servis1Service} from '../servis1.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminGuardGuard } from '../admin-guard.guard';
import {CookieService} from 'ngx-cookie-service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-bord',
  templateUrl: './admin-bord.component.html',
  styleUrls: ['./admin-bord.component.css']
})
export class AdminBordComponent implements OnInit {
  telefon_oglas = 0;
  t: any;
  tel_admin:any;
  telefoni_provjera:number=0;
  photo: any = {
    slika:"",
    telefon_id:""
  }
  slika:any;
  brojac = 0;


  constructor(public  s: ServisService, public s1: Servis1Service, private http:HttpClient, public guard: AdminGuardGuard, public cookie: CookieService) {
  }


  ngOnInit(): void {
    this.s.logovan();
    this.dajtelefonadminu();
    this.s.dajpostoveadminu();
    this.s.broji_postove();
    this.s.dajpitanja();
    if(this.s.token != "")
    {
      this.guard.logovan = true;
    }

  }




  dajtelefonadminu() {
    return this.http
      .get(
        'http://localhost:8000/api/novitelefon' )


      .subscribe(posts => {
        this.tel_admin = posts;
        this.telefoni_provjera=this.tel_admin.length





      })


  }


  obrisi2(id: number) {

    Swal.fire({
      title: 'Jeste li sigurni?',
      text: 'Necete moći povratiti ovaj oglas!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Jesam!',
      cancelButtonText: 'Nisam'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
        title:  'Izbrisano!',
         icon: 'success'
        } )
        this.s.obrisiPost(id);

        this.ngOnInit()
      }


      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          text: 'Oglas nije izbrisan',
          icon: 'error'
        } )
       }
    })

  }




  postavi2(id: number) {
    this.s.dodajOglasAdmin(id)



  }


}
