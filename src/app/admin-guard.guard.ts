import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
constructor(public cookieService:CookieService){}
  logovan = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{

     return this.logovan;

  }

}
