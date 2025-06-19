import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class NormalGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.login.isLoggedIn(); /// i get from this ===>true
    const userRole = this.login.getUserRole(); ///  i get from this ===>NORMAL

    console.log('Logged in:', isLoggedIn);
    console.log('Role:', userRole);

    if (this.login.isLoggedIn() && this.login.getUserRole() == 'NORMAL') {
      return true;
    }

    this.router.navigate(['login']);
    console.log("Below naviage");
    return false;
  }
}
