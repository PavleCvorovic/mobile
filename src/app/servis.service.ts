import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
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

  constructor(private http: HttpClient,private datePipe: DatePipe) { }

dajVrijeme(){
  var date = new Date();
   let a= this.datePipe.transform(date,"mm-dd-yyyy");
  let newDate = new Date(a);
  this.post.datum= newDate;
}






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

  post:any ={
    tekst :'',
     datum:new Date()


  }



  dodajPost() {

    const params = new HttpParams()


    this.http
      .post(
        'http://localhost:8000/api/dodaj-oglas', this.post,
        {
          params: params
        }
      )   .subscribe(responseData =>
    {

    })
  }



    telefonBaza:any = {
    mark_id:1,
    cijena:'',
    opis:'',
    konfiguracije:'ssda',
    prodavac:'',
    kontakt:'',
    datum_objave: new Date,
    datum_isteka: new Date,
    slika1:'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg',
    slika2:'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg',
    slika3:'https://tvtopsound.com/media/news/nijesmoMiOdJuceTvSerija/crop2/nijesmo-mi-od-juce-1.jpg'
  }

  dodajTelefon()
  {
    // this.knjiga = knjiga;
    // this.ostaliBaza = ostaliBaza;
     const params = new HttpParams()



    this.http
    .post(
      'http://localhost:8000/api/dodaj-telefon',this.telefonBaza,
      {
        params:params
      }
    )
    .subscribe(responseData =>
      {

      })

  }


    model_ime:any;


  dodajModel()
  {
    const params = new HttpParams()



    this.http
    .post(
      'http://localhost:8000/api/dodaj-model',this.model_ime,
      {
        params:params
      }
    )
    .subscribe(responseData =>
      {

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
