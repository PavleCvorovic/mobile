import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  logovan = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    return this.logovan;
  }

}
