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
prikaz:boolean=false;

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
        let i;

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
   let ida=id
    console.log(ida);
    return this.http.delete('http://localhost:8000/api/obrisi/'+ ida)
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
    return this.http.delete('http://localhost:8000/api/obrisi-oglas/'+ id)
      .subscribe(()=>
      {

      })
  }




  dajmodel(){
    return this.http
      .get(
        'http://localhost:8000/api/model')


      .subscribe(posts => {
        this.modeli = posts;
        console.log(this.modeli);


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
    slika_id:'',
    specifikacije:0,
    prodavac:'',
    kontakt:'',
    javno:0,
    sifra:'aaa',


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
        console.log(this.specifikacije);


      })
  }

  dodajKonfiguracije()
  {
    const params = new HttpParams()

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
        console.log(this.postovi);


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

  postovi_provjera:number= 0;

  // broji_telefone(){
  //  return  this.http
  //     .get(
  //       'http://localhost:8000/api/telefoni')
  //
  //
  //     .subscribe(posts => {
  //
  //       this.telefoni = posts;
  //       console.log(this.telefoni);
  //       for (let i=0; i<this.telefoni.length;i++){
  //         if (this.telefoni[i].javno != 1){
  //          this.telefoni_provjera++;
  //         }
  //
  //       }
  //       console.log(this.telefoni_provjera);
  //     })
  //
  //
  //
  //
  //
  //
  //
  //
  // }
  broji_postove() {
    return  this.http
    .get(
      'http://localhost:8000/api/oglas')


    .subscribe(posts => {

      this.postovi = posts;
      console.log(this.postovi);
      for (let i=0; i<this.postovi.length;i++){
        if (this.postovi[i].javno != 1){
         this.postovi_provjera++;
        }

      }
      console.log(this.postovi_provjera);
    })
  }

logged = false;

logovan()
{
  this.logged = true;
  this.http.get('http://localhost:8000/api/user', {withCredentials:true})
  .subscribe(res=>
    {
      console.log(res);
    },
    err=>
    {
      console.log(err);

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
