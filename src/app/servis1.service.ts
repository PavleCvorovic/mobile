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

  constructor(public  s: ServisService, private http: HttpClient) {
  }


  dajtelefonpomarci(id) {
    console.log(id)
    return this.http
      .get(
        'http://localhost:8000/api/telefon-filtriraj/' + id)


      .subscribe(posts => {
        this.tel_marka_id = posts;
        console.log(this.tel_marka_id)

      })
  }

  photo: any = {
    slika1: '',
    slika2: '',
    slika3: ''
  }
  slika:any;

  postavislike() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    var params = new FormData();
    params.append('slika1', this.photo.slika1)
    params.append('slika2', this.photo.slika2)
    params.append('slika3', this.photo.slika3)
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
    return this.http
      .get(
        'http://localhost:8000/api/telefon-filtriraj/telefonmodel/' + naziv)


      .subscribe(posts => {
        this.tel_model_naziv = posts;


      })


  }


  dajtelefonadminu() {
    return this.http
      .get(
        'http://localhost:8000/api/novitelefon' )


      .subscribe(posts => {
        this.tel_admin = posts;


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
