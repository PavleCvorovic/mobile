import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';
import {Servis1Service} from '../servis1.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminGuardGuard } from '../admin-guard.guard';
import {CookieService} from 'ngx-cookie-service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-admin-bord',
  templateUrl: './admin-bord.component.html',
  styleUrls: ['./admin-bord.component.css']
})
export class AdminBordComponent implements OnInit {
  telefon_oglas = 0;
  t: any;



  constructor(public  s: ServisService, public s1: Servis1Service, private domSanitizer: DomSanitizer, public guard: AdminGuardGuard, public cookie: CookieService) {
  }

  jwt: any;


  ngOnInit(): void {


    this.s.logovan();
    this.s1.dajtelefonadminu();
    this.s.dajtelefone();
    this.s.dajpostove();
    this.s.broji_postove();


  }

  proba() {
    this.jwt = this.cookie.get('jwt');

    if (this.jwt.length > 0) {
      console.log(this.jwt);

    }
  }


  postavi(id: number) {
    this.s.dodajTelefonAdmin(id);
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

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          text: 'Oglas nije izbrisan',
          icon: 'error'
        } )
        this.ngOnInit()}
    })

  }




  postavi2(id: number) {
    this.s.dodajOglasAdmin(id)



  }


}
