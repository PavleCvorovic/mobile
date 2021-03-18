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
telefoni:any=[];
  constructor(private http: HttpClient) { }
  dajtelefone(){
    return this.http
      .get(
        'http://localhost:8000/api/telefoni')


      .subscribe(posts => {
        this.telefoni = posts;

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
