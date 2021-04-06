import { Injectable } from '@angular/core';
import {ServisService} from "./servis.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Servis1Service {
tel_marka_id:any;

  constructor(public  s:ServisService,private http: HttpClient) { }



  dajtelefonpomarci(id){
    console.log(id)
    return this.http
      .get(
        'http://localhost:8000/api/telefon-filtriraj/'+id)


      .subscribe(posts => {
        this.tel_marka_id = posts;
        console.log(this.tel_marka_id)

      })
  }

  photo:any={
    slika1:'',
    slika2:'',
    slika3:''
}

  postavislike(){

    this.http
      .post('http://localhost:8000/api/file',this.photo)


      .subscribe(posts => {


      })
  }







}
