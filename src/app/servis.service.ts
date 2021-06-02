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

  telefoniZaCijenu:any=[];
  telefoniZaCijenuObrnuto:any=[]
sort = 0;

sortCijena(value:number)
{
  // this.dajtelefone();
  // this.telefoniZaCijenu = this.s.telefoniZaSlike;
  for(let i = 0; i<this.telefoni.length;i++)
  {
    this.telefoniZaCijenu[i] = this.telefoni[i];

  }


  // this.telefoniZaCijenu = this.telefoniZaCijenu.slice();

  // console.log(this.telefoniZaCijenu);
  for( let i=0;i<this.telefoniZaCijenu.length;i++){
    for(let j=0;j<this.telefoniZaCijenu.length-1;j++){
      if(this.telefoniZaCijenu[j].cijena > this.telefoniZaCijenu[j+1].cijena){
        [this.telefoniZaCijenu[j], this.telefoniZaCijenu[j+1]] =[this.telefoniZaCijenu[j+1],this.telefoniZaCijenu[j]];
    }
}
}
  if(value == 0)
  {
    this.telefoni= this.telefoniZaCijenu;
}
else if(value == 1)
{
  for(let i=this.telefoniZaCijenu.length-1;i>=0;i--)
  {
    this.telefoniZaCijenuObrnuto[this.sort] = this.telefoniZaCijenu[i];
    this.sort++;
  }
  this.telefoni = this.telefoniZaCijenuObrnuto;
}
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
        else {

          this.prikaz=false;


        }
        var timeH:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
        var timeM:number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
        var timeD:number[]=[];
        for (let i=0;i<31;i++){
          timeD[i]=i;
        }

        let today = new Date()
        for (let i=0 ;i <=this.telefoni.length;i++){
          let newdate =new Date(this.telefoni[i]?.vrijeme)
          var timepostH=newdate.getHours();
          var timenowH:number=today.getHours();
          var timepostM=newdate.getMinutes();
          var timenowM:number=today.getMinutes();
          var zbirM:number=timepostM+timenowM;
          var timenowD:number=today.getDay();
          var timepostD:number=newdate.getDay();
          var timenowMonth:number= today.getMonth();
          var timepostMonth:number = newdate.getMonth();
          var checkMin:boolean=false;
          var checkHr:boolean=false;
          var satiM,satiH,satiD,satiMonth;


if (timenowM<timepostM){
  timenowM=timenowM+60
   timenowH=timenowH-1;
   satiM= Math.abs(timenowM-timepostM);
}else {
  satiM = timenowM-timepostM;
}
          // satiM= Math.abs(timenowM-timepostM);

          // console.log('minuta je'+ timenowM+''+timepostM+'='+satiM)

          if(timenowH<timepostH)
          {
            timenowH=timenowH+24;
            timenowD=timenowD-1;
            satiH= Math.abs(timenowH-timepostH);
          }else {
            satiH = timenowH- timepostH;
          }


          if(timenowD<timepostD)
          {
            timenowD = timenowD+31;
            timenowMonth = timenowMonth-1;
            satiD = timenowD-timepostD;
          }else
          {
            satiD = timenowD-timepostD
          }
          if(timenowMonth-timepostMonth >= 3)
          {
            this.brisiTelefon(this.telefoni[i].id);
          }else
          {
            satiMonth= timenowMonth - timepostMonth;
          }


          if(timepostMonth==timenowMonth && timepostD == timenowD && timenowH == timepostH)
          {

            this.telefoni[i].vrijeme = "prije "+ satiM+ " min";
          }
          else if(timepostMonth==timenowMonth && timepostD == timenowD)
          {

            this.telefoni[i].vrijeme = "prije " + satiH + " h";

          }else if(timepostMonth==timenowMonth)
          {

            this.telefoni[i].vrijeme = "prije " + satiD + " dana";
          }else
          {
            this.telefoni[i].vrijeme = "prije "+ satiMonth + " mjeseca"
          }



        }

      })
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
vrijeme:''


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
