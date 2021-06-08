import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ServisService } from './servis.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
constructor(public cookieService:CookieService, public s:ServisService){}
   logovan=false;


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    if(this.s.token != "")
    {
      this.logovan = false;
      return this.logovan;
    }else
    {
      this.logovan = true;
      return this.logovan;
    }


  }


}
