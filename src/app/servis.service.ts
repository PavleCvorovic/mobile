import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ServisService {
  tel_marka_model:any;
  spiner:boolean=false;
  spinerOglas:boolean=false;
telefoni:any=[];
modeli:any=[];
marke:any=[];
postovi:any=[];
  postovi1:any=[];
prikaz:boolean=false;
  id_telefona;
  duzinatelefona:number;
  pitanja:any;
  pitanja_provjera:number;
  constructor(private http: HttpClient,private datePipe: DatePipe) { }

  telefoniZaSlike:any;

  uzmiSveTelefone()
  {
    return this.http
        .get(
          'http://localhost:8000/api/sviTelefoni')


        .subscribe(posts => {
            this.telefoniZaSlike = posts;
        }
        )
  }






  dajtelefone(){
    this.spiner=true;
    return this.http
      .get(
        'http://localhost:8000/api/telefoni')


      .subscribe(posts => {

   this.telefoni = posts;
this.telefoni.reverse();
        console.log(this.telefoni)
        this.spiner=false;
        let i;
     this.duzinatelefona=this.telefoni.length
if (this.telefoni.length===0){
  this.prikaz=true
}
        else{

        for( i=0; i<=this.telefoni.length;i++){

        if(this.telefoni[i].javno === null )

        {

          this.prikaz = true;
        }
        else {

          this.prikaz=false;
          break;

        }}

      }})
  }


  brisiTelefon(id){


    return this.http.delete('http://localhost:8000/api/obrisi/'+ id)
      .subscribe(()=>
      {

      })
  }

  dodajTelefonAdmin(id)
  {
    const params = new HttpParams()
    return this.http.post('http://localhost:8000/api/edit/'+id, '')
    .subscribe(()=>
    {

    })
  }

  dodajOglasAdmin(id)
  {
    const params = new HttpParams()
    return this.http.post('http://localhost:8000/api/edit-oglas/'+id, '')
    .subscribe(()=>
    {

    })
  }

  obrisiPost(id)
  {
    this.http.delete('http://localhost:8000/api/obrisi-oglas/'+ id)
      .subscribe(()=>
      {

      })
  }




  dajmodel(){
    return this.http

      .get(
        'http://localhost:8000/api/model/')


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

  dajmodelmarke(broj) {
    return this.http
      .get(
        'http://localhost:8000/api/model/' + broj)


      .subscribe(posts => {
        this.tel_marka_model = posts;


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
    mark_id:0,
    model:'',
    cijena:'',
    opis:'',
    specifikacije:0,
    prodavac:'',
    kontakt:'',
    javno:0,
    sifra:'aaa',
    stanje:'',
      photo:{
        slika:'',
        telefon_id:''
      },



  }

  konfiguracijeBaza:any= {
    procesor: '',
    ram:'',
    baterija:'',
    kamera_zadnja:'',
    kamera_prednja:'',
    ekran:'',
    memorija:''
  }
  specifikacije:any;

  uzmiKonfiguracije()
  {
    return this.http
      .get(
        'http://localhost:8000/api/konfiguracije')


      .subscribe(posts => {
        this.specifikacije = posts;



      })
  }


  dodajKonfiguracije()
  {
    const params = new HttpParams()
    this.spinerOglas = true;
    this.http
    .post(
      'http://localhost:8000/api/dodaj-konfiguracije',this.konfiguracijeBaza,
      {
        params:params
      }
    )
    .subscribe(responseData =>
      {

      })
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
this.postovi.reverse();


      })
  }
  dajpostoveadminu(){
    return this.http
      .get(
        'http://localhost:8000/api/oglasadmin')


      .subscribe(posts => {
        this.postovi1 = posts;



      })
  }
  telefonId:any;








  postovi_provjera:number= 0;



  broji_postove() {
    return  this.http
    .get(
      'http://localhost:8000/api/oglasadmin')


    .subscribe(posts => {

      this.postovi = posts;

this.postovi_provjera=this.postovi.length;
    })
  }

logged = false;

  getTelefonId(id:any) :Observable<any> {
    return this.http.get('http://localhost:8000/api/telefoni/'+ id);
  }

logovan()
{
  this.logged = true;
  this.http.get('http://localhost:8000/api/user', {withCredentials:true})
  .subscribe(res=>
    {

    },
    err=>
    {
      console.log(err);

    }
    )
}

dajpitanja(){
  return  this.http
    .get(
      'http://localhost:8000/api/mail-svi')


    .subscribe(posts => {

      this.pitanja = posts;

      this.pitanja_provjera=this.pitanja.length;
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
