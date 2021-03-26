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
prikaz:boolean=true;

  constructor(private http: HttpClient,private datePipe: DatePipe) { }








  dajtelefone(){
    this.spiner=true;
    return this.http
      .get(
        'http://localhost:8000/api/telefoni')


      .subscribe(posts => {

        this.telefoni = posts;
        console.log(this.telefoni);


        this.spiner=false;
        if(this.telefoni.length === 0)
        {
          this.spiner=false;
          this.prikaz = false;
        };

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
        console.log(this.marke);


      })
  }





posts:any={
    tekst:'',

}




  dodajPost() {

    const params = new HttpParams()


    this.http
      .post(
        'http://localhost:8000/api/dodaj-oglas', this.posts

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
    slika1:'http://www.onlinemobilni.com/sites/default/files/imagecache/product_full/proizvodi/apple_iphone5.jpg',
    slika2:'http://www.onlinemobilni.com/sites/default/files/imagecache/product_full/proizvodi/apple_iphone5.jpg',
    slika3:'http://www.onlinemobilni.com/sites/default/files/imagecache/product_full/proizvodi/apple_iphone5.jpg'
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

models:any={
  marka_id:'',
  model_naziv:''
}

  dodajModel()
  {
    const params = new HttpParams()



    this.http
    .post(
      'http://localhost:8000/api/dodaj-model',this.models,
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
  telefonId:any;

  uzmiTelefonId(id)
  {
      return this.http
      .get(
        'http://localhost:8000/api/telefoni/'+ id
      )
      .subscribe(
        posts=>
        {
            this.telefonId = posts;
            console.log(this.telefonId);

        }
      )
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
