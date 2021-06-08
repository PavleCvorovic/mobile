import { Injectable } from '@angular/core';
import {ServisService} from "./servis.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class Servis1Service {

  spiner:boolean=false;
  swaloglas:boolean=false;
  tel_marka_id: any;

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

  filter:any ={
    marka_id:0,
    cijena_min:0,
    cijena_max:2000,
    model_naziv:'',
    ram:0,
    prednja:0,
    zadnja:0,
    memorija:0,
  }


  filtriraj(){

    this.s.spiner=false;

    return this.http.post('http://localhost:8000/api/filtrirajSve', this.filter)
      .subscribe(posts=>
      {

        this.s.telefoni=posts;

this.s.duzinatelefona=this.s.telefoni.length



        this.s.telefoni.reverse();

        this.s.spiner=false;
        if (this.s.telefoni.length===0){
          this.s.prikaz=true
        }
        else {

          this.s.prikaz=false;


        }

        let i;

        var timeH:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
        var timeM:number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
        var timeD:number[]=[];
        for (let i=0;i<31;i++){
          timeD[i]=i;
        }

        let today = new Date()
        for (let i=0 ;i <this.s.telefoni.length;i++){
          let newdate =new Date(this.s.telefoni[i]?.vrijeme)
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

            satiD = timenowD-timepostD;
            timepostMonth = timepostMonth-1;
          }else
          {
            satiD = timenowD-timepostD
          }
          if(timenowMonth-timepostMonth >= 3)
          {
            this.s.brisiTelefon(this.s.telefoni[i].id);
          }else
          {
            satiMonth= timenowMonth - timepostMonth;
          }


          if(timepostMonth==timenowMonth && timepostD == timenowD && timenowH == timepostH)
          {
            this.s.telefoni[i].okacen='1';
            this.s.telefoni[i].vrijeme = "prije "+ satiM+ " min";
          }
          else if(timepostMonth==timenowMonth && timepostD == timenowD)
          {
            this.s.telefoni[i].okacen='1';
            this.s.telefoni[i].vrijeme = "prije " + satiH + " h";

          }else if(timepostMonth==timenowMonth)
          {

            this.s.telefoni[i].vrijeme = "prije " + satiD + " dan";
          }else
          {
            this.s.telefoni[i].vrijeme = "prije "+ satiMonth + " mjesec"
          }



        }
















      })
  }



brojac = 0;



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
        this.s.spinerOglas = false;
        if(this.brojac <1)
        {
           Swal.fire('Hvala vam...', 'Ubrzo nakod pregleda od strane administracije vaš oglas će biti objavljen !', 'success')
           this.brojac++;
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
