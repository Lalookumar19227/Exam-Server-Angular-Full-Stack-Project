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
export class AdminGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.login.isLoggedIn();
    const userRole = this.login.getUserRole();

    console.log('Logged in:', isLoggedIn); /// i get from this ===>true
    console.log('Role:', userRole); ///  i get from this ===>NORMAL

    if (this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN') {
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }
}
