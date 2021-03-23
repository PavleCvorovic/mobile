import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServisService {
  spiner:boolean=false;
telefoni:any=[];
modeli:any=[];
marke:any=[];
postovi:any=[];

  constructor(private http: HttpClient) { }
  dajtelefone(){
    this.spiner=true;
    return this.http
      .get(
        'http://localhost:8000/api/telefoni')


      .subscribe(posts => {
        this.spiner=false;
        this.telefoni = posts;
        console.log(this.telefoni);
        

      })
  }
  dajmodel(){
    return this.http
      .get(
        'http://localhost:8000/api/model')


      .subscribe(posts => {
        this.modeli = posts;

      })
  }
  dajmarku(){
    return this.http
      .get(
        'http://localhost:8000/api/marke')


      .subscribe(posts => {
        this.marke = posts;

      })
  }


  dajpostove(){
    return this.http
      .get(
        'http://localhost:8000/api/oglas')


      .subscribe(posts => {
        this.postovi = posts;

      })
  }




}
export interface Telefon {
  id: number;
  kategorija: number;
  cijena: string;
  opis :string;
  slika:string;
  datum_objave:string;
  datum_isteka:string;


}
