import { Injectable } from '@angular/core';
import {ServisService} from "./servis.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class Servis1Service {

  spiner:boolean=false;
  swaloglas:boolean=false;
  tel_marka_id: any;

  tel_model_naziv: any;
  tel_admin:any;
  telefoni_provjera:number=0;
  slike_novi_nacin:any;


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







  dajtelefonadminu() {
    return this.http
      .get(
        'http://localhost:8000/api/novitelefon' )


      .subscribe(posts => {
        this.tel_admin = posts;
        this.telefoni_provjera=this.tel_admin.length





      })


  }

  prototip_slike(a){

    return this.http.get('http://localhost:8000/api/slika/'+a)
      .subscribe(posts=>
      {
        this.slike_novi_nacin = posts;


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
  slikaId:any;
  slikeBazaId(id)
  {
    return this.http.get('http://localhost:8000/api/slika/'+id)
    .subscribe(
      posts=>
      {
          this.slikaId = posts;


      }
    )
  }





}
