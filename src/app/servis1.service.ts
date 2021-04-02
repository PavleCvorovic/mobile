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
    return this.http
      .get(
        'http://localhost:8000/api/model-filtriraj/'+id)


      .subscribe(posts => {
        this.tel_marka_id = posts;


      })
  }








}
