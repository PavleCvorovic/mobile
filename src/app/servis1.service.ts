import { Injectable } from '@angular/core';
import {ServisService} from "./servis.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class Servis1Service {







  constructor(public  s: ServisService, private http: HttpClient) {
  }



  photo: any = {
    slika:"",
    telefon_id:""
  }
  slika:any;




brojac = 0;



  postavislike() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('slika', this.photo.slika)
    params.append('telefon_id', this.photo.telefon_id);
    this.http
      .post('http://localhost:8000/api/file', params

      )


      .subscribe(posts => {
        this.s.spinerOglas = false;
        if(this.brojac <1)
        {
           Swal.fire('Hvala vam...', 'Ubrzo nakod pregleda od strane administracije vaš oglas će biti objavljen !', 'success')
           this.brojac++;
        }
      })
  }










  slikeBaza11:any;

  uzmiSlike()
  {
    return this.http.get('http://localhost:8000/api/slike')
    .subscribe(posts=>
      {
          this.slikeBaza11 = posts;


      })
  }




}
