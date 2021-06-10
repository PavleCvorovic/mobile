import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServisService {
  tel_marka_model: any;
  spiner: boolean = false;
  spinerOglas: boolean = false;
  telefoni: any = [];
  modeli: any = [];
  marke: any = [];
  postovi: any = [];
  postovi1: any = [];
  prikaz: boolean = false;
  id_telefona;
  duzinatelefona: number;
  pitanja: any;
  token: string;
  pitanja_provjera: number;
  telefoniZaSlike: any;

  posts: any = {
    tekst: '',

  }
  telefonBaza: any = {
    mark_id: 0,
    model: '',
    cijena: '',
    opis: '',
    specifikacije: 0,
    prodavac: '',
    kontakt: '',
    javno: 0,
    sifra: 'aaa',
    stanje: '',
    photo: {
      slika: '',
      telefon_id: ''
    },
    vrijeme: ''


  }
  konfiguracijeBaza: any = {
    procesor: '',
    ram: '',
    baterija: '',
    kamera_zadnja: '',
    kamera_prednja: '',
    ekran: '',
    memorija: ''
  }
  specifikacije: any;
  models: any = {
    marka_id: '',
    model_naziv: ''
  }
  postovi_provjera: number = 0;
  logged = false;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  uzmiSveTelefone() {
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/sviTelefoni')


      .subscribe(posts => {
          this.telefoniZaSlike = posts;
        }
      )
  }




  brisiTelefon(id) {


    return this.http.delete('http://polovni-telefoni.tk/laravel/public/api/obrisi/' + id)
      .subscribe(() => {

      })
  }

  dodajTelefonAdmin(id) {
    const params = new HttpParams()
    return this.http.post('http://polovni-telefoni.tk/laravel/public/api/edit/' + id, '')
      .subscribe(() => {

      })
  }

  dodajOglasAdmin(id) {
    const params = new HttpParams()
    return this.http.post('http://polovni-telefoni.tk/laravel/public/api/edit-oglas/' + id, '')
      .subscribe(() => {

      })
  }

  obrisiPost(id) {
    this.http.delete('http://polovni-telefoni.tk/laravel/public/api/obrisi-oglas/' + id)
      .subscribe(() => {

      })
  }

  dajmodel() {
    return this.http

      .get(
        'http://polovni-telefoni.tk/laravel/public/api/model/')


      .subscribe(posts => {
        this.modeli = posts;


      })
  }

  dajmarku() {
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/marke')


      .subscribe(posts => {
        this.marke = posts;


      })
  }

  dajmodelmarke(broj) {
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/model/' + broj)


      .subscribe(posts => {
        this.tel_marka_model = posts;


      })


  }

  dodajPost() {
    this.http
      .post(
        'http://polovni-telefoni.tk/laravel/public/api/dodaj-oglas', this.posts
      ).subscribe(responseData => {

    })
  }

  uzmiKonfiguracije() {
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/konfiguracije')


      .subscribe(posts => {
        this.specifikacije = posts;


      })
  }

  dodajKonfiguracije() {
    const params = new HttpParams()
    this.spinerOglas = true;
    this.http
      .post(
        'http://polovni-telefoni.tk/laravel/public/api/dodaj-konfiguracije', this.konfiguracijeBaza,
        {
          params: params
        }
      )
      .subscribe(responseData => {

      })
  }

  dodajTelefon() {
    const params = new HttpParams()


    this.http
      .post(
        'http://polovni-telefoni.tk/laravel/public/api/dodaj-telefon', this.telefonBaza,
        {
          params: params
        }
      )
      .subscribe(responseData => {

      })

  }

  dajpostove() {
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/oglas')


      .subscribe(posts => {
        this.postovi = posts;
        this.postovi.reverse();


      })
  }

  dajpostoveadminu() {
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/oglasadmin')


      .subscribe(posts => {
        this.postovi1 = posts;


      })
  }

  broji_postove() {
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/oglasadmin')


      .subscribe(posts => {

        this.postovi = posts;

        this.postovi_provjera = this.postovi.length;
      })
  }

  getTelefonId(id: any): Observable<any> {
    return this.http.get('http://polovni-telefoni.tk/laravel/public/api/telefoni/' + id);
  }

  logovan() {
    this.logged = true;
    this.http.get('http://polovni-telefoni.tk/laravel/public/api/user', {withCredentials: true})
      .subscribe(res => {

        },
        err => {
          console.log(err);

        }
      )
  }

  dajpitanja() {
    return this.http
      .get(
        'http://polovni-telefoni.tk/laravel/public/api/mail-svi')


      .subscribe(posts => {

        this.pitanja = posts;

        this.pitanja_provjera = this.pitanja.length;
      })


  }


}
