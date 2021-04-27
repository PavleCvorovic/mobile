import { Injectable } from '@angular/core';
import {ServisService} from "./servis.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Servis1Service {
  tel_marka_id: any;
  tel_marka_model: any;
  tel_model_naziv: any;
  tel_admin:any;
  telefoni_provjera:number=0;
  slike_novi_nacin:any;

  constructor(public  s: ServisService, private http: HttpClient) {
  }


  dajtelefonpomarci(id) {
    this.s.spiner=true;
    return this.http
      .get(
        'http://localhost:8000/api/telefon-filtriraj/' + id)


      .subscribe(posts => {
        this.tel_marka_id = posts;
        console.log(this.tel_marka_id)
        this.s.spiner=false;

        if (this.tel_marka_id.length===0){
          this.s.prikaz=true
        }
        else {          this.s.prikaz=false
        }

      })
  }

  photo: any = {
    slika:"",
    telefon_id:""
  }
  slika:any;

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

      })
  }

  dajmodelmarke(broj) {
    return this.http
      .get(
        'http://localhost:8000/api/model/' + broj)


      .subscribe(posts => {
        this.tel_marka_model = posts;


      })


  }

  dajtelefonpomodelu(naziv) {
    this.s.spiner=true;
    return this.http
      .get(
        'http://localhost:8000/api/telefon-filtriraj/telefonmodel/' + naziv)


      .subscribe(posts => {
        this.tel_model_naziv = posts;
        this.s.spiner=false;

        if (this.tel_model_naziv.length===0){
          this.s.prikaz=true
        }
        else {
          this.s.prikaz=false
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



        console.log(this.telefoni_provjera)

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
          console.log(this.slikeBaza11);

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
