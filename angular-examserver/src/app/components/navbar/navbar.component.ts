import { Component,Input} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

@Input() userRole1!: string;

  isLoggedIn = false;
  user = null;
userRole: any;
// currentRoute: string = '';

  constructor(public login: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    // this.userRole= "Admin"
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
    //  this.currentRoute = this.router.url;

  // ⬇️ NEW: Subscribe to route changes
  // this.router.events.subscribe(event => {
  //   if (event instanceof NavigationEnd) {
  //     this.currentRoute = event.urlAfterRedirects;
  //   }
  // });

  }

  public logout() { 
    this.login.logout();
    // this.isLoggedIn = false;
    // this.user = null;
    window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }
}


